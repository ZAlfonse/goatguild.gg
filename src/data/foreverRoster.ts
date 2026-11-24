// WoW: Forever roster + activity, written by scripts/update-site-data.mjs from the Blizzard API.
// Until the API keys are configured the file doesn't exist and `foreverRoster` is null.

export interface ForeverMember {
  name: string;
  level: number | null;
  classId: number | null;
  rank: number | null;
  firstSeen: string; // YYYY-MM-DD
  lastLevelUp: string | null; // ISO timestamp
  lastLogin?: string | null; // ISO timestamp from the character profile
}

// `approx`: the exact time is unknown; it happened between `after` (previous sync) and `at` (this sync).
type Timing = { at: string; approx?: boolean; after?: string };
export type ActivityEvent =
  | (Timing & { type: 'level'; name: string; classId: number | null; from: number; to: number })
  | (Timing & { type: 'joined'; name: string; classId: number | null; level: number | null })
  | { type: 'achievement'; at: string; name: string; classId: number | null; achievement: string };

interface RosterFile {
  updatedAt: string;
  maxLevel: number;
  members: ForeverMember[];
  activity?: ActivityEvent[];
  history?: Record<string, Record<string, number>>; // day -> name -> level
}

// Hand-confirmed level-cap names. Remove a name once Blizzard's generated snapshot catches up.
export const confirmedAtMax = new Set(['Chieph Beef', 'Clo Vis']);

// import.meta.glob returns {} instead of failing the build when the file is missing.
const files = import.meta.glob<RosterFile>('./generated/forever-roster.json', { eager: true, import: 'default' });
const file = Object.values(files)[0] ?? null;

// Blizzard playable class ids → our class keys (match the Tailwind class-* colors)
const CLASS_BY_ID: Record<number, string> = {
  1: 'warrior', 2: 'paladin', 3: 'hunter', 4: 'rogue', 5: 'priest',
  7: 'shaman', 8: 'mage', 9: 'warlock', 11: 'druid',
};
export const classKey = (id: number | null) => (id != null ? CLASS_BY_ID[id] ?? null : null);

export const classText: Record<string, string> = {
  warrior: 'text-class-warrior', paladin: 'text-class-paladin', hunter: 'text-class-hunter',
  rogue: 'text-class-rogue', priest: 'text-class-priest', shaman: 'text-class-shaman',
  mage: 'text-class-mage', warlock: 'text-class-warlock', druid: 'text-class-druid',
};
export const classBg: Record<string, string> = {
  warrior: 'bg-class-warrior', paladin: 'bg-class-paladin', hunter: 'bg-class-hunter',
  rogue: 'bg-class-rogue', priest: 'bg-class-priest', shaman: 'bg-class-shaman',
  mage: 'bg-class-mage', warlock: 'bg-class-warlock', druid: 'bg-class-druid',
};
export const nameClass = (id: number | null) => classText[classKey(id) ?? ''] ?? 'text-gray-200';

/** "3h ago", "2d ago", relative to the build (the site rebuilds at least daily). */
export function timeAgo(iso: string, now = Date.now()) {
  const mins = Math.max(0, Math.round((now - new Date(iso).getTime()) / 60000));
  if (mins < 60) return mins <= 1 ? 'just now' : `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  return days < 30 ? `${days}d ago` : new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/** "12:11–3:17 PM", or "Nov 21, 10:50 PM – 12:11 PM" across days (Eastern time). */
export function windowLabel(after: string, at: string) {
  const tz = 'America/New_York';
  const day = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: tz });
  const time = (d: string) => new Date(d).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: tz });
  const period = (d: string) => time(d).slice(-2);
  if (day(after) !== day(at)) return `${day(after)}, ${time(after)} – ${time(at)}`;
  const start = period(after) === period(at) ? time(after).slice(0, -3) : time(after);
  return `${start}–${time(at)}`;
}

export interface RosterRow extends ForeverMember {
  level: number;
  gainedThisWeek: number;
}

export interface ClimbDay {
  day: string; // YYYY-MM-DD (UTC, the day of the snapshot)
  gained: number; // levels gained by the whole herd since the previous snapshot
  goats: number; // how many characters gained at least one level
  top: { name: string; classId: number | null; gained: number }[];
  reachedCap: string[]; // names that hit the level cap that day
  partial: boolean; // the day isn't over yet at the last sync
}

/** Levels gained per day, from consecutive daily snapshots in `history`. Newest last. */
function dailyClimb(f: RosterFile): ClimbDay[] {
  const history = f.history ?? {};
  const days = Object.keys(history).sort();
  const classOf = new Map(f.members.map(m => [m.name, m.classId]));
  const today = f.updatedAt.slice(0, 10);
  return days.slice(1).map((day, i) => {
    const prev = history[days[i]];
    const gains = Object.entries(history[day])
      .map(([name, level]) => ({ name, classId: classOf.get(name) ?? null, gained: level - (prev[name] ?? level) }))
      .filter(g => g.gained > 0)
      .sort((a, b) => b.gained - a.gained || a.name.localeCompare(b.name));
    return {
      day,
      gained: gains.reduce((s, g) => s + g.gained, 0),
      goats: gains.length,
      top: gains.slice(0, 3),
      reachedCap: Object.entries(history[day])
        .filter(([name, level]) => level >= f.maxLevel && (prev[name] ?? 0) < f.maxLevel)
        .map(([name]) => name),
      partial: day === today,
    };
  });
}

function build(f: RosterFile) {
  const maxLevel = f.maxLevel;
  const history = f.history ?? {};
  const days = Object.keys(history).sort();
  // Compare against the oldest snapshot within the last 7 days.
  const weekAgo = new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10);
  const baseDay = days.find(d => d >= weekAgo) ?? days[0];
  const base = baseDay ? history[baseDay] : {};

  const members: RosterRow[] = f.members
    .filter((m): m is ForeverMember & { level: number } => m.level != null)
    .map(m => {
      const level = confirmedAtMax.has(m.name) ? maxLevel : m.level;
      return { ...m, level, gainedThisWeek: Math.max(0, level - (base[m.name] ?? level)) };
    })
    .sort((a, b) => b.level - a.level || a.name.localeCompare(b.name));

  return {
    updatedAt: f.updatedAt,
    maxLevel,
    members,
    total: members.length,
    atMax: members.filter(m => m.level >= maxLevel).length,
    averageLevel: members.length ? Math.round(members.reduce((s, m) => s + m.level, 0) / members.length) : 0,
    levelsThisWeek: members.reduce((s, m) => s + m.gainedThisWeek, 0),
    climbers: members.filter(m => m.gainedThisWeek > 0).sort((a, b) => b.gainedThisWeek - a.gainedThisWeek).slice(0, 5),
    activity: (f.activity ?? []).slice(0, 50),
    daily: dailyClimb(f),
  };
}

export const foreverRoster = file && file.members?.some(m => m.level != null) ? build(file) : null;
export type ForeverRoster = NonNullable<typeof foreverRoster>;
