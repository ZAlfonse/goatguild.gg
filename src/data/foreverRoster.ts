// WoW: Forever roster levels, written daily by scripts/update-site-data.mjs once the
// Blizzard API keys are configured. Until then the file doesn't exist and `foreverRoster` is null,
// so pages fall back to the interest survey.

export interface ForeverMember {
  name: string;
  level: number | null;
  classId: number | null;
}

interface RosterFile {
  updatedAt: string;
  maxLevel: number;
  members: ForeverMember[];
}

// import.meta.glob returns {} instead of failing the build when the file is missing.
const files = import.meta.glob<RosterFile>('./generated/forever-roster.json', { eager: true, import: 'default' });
const file = Object.values(files)[0] ?? null;

// Blizzard playable class ids → our class keys (shared with the survey + Tailwind class colors)
const CLASS_BY_ID: Record<number, string> = {
  1: 'warrior',
  2: 'paladin',
  3: 'hunter',
  4: 'rogue',
  5: 'priest',
  7: 'shaman',
  8: 'mage',
  9: 'warlock',
  11: 'druid',
};

export const classKey = (id: number | null) => (id != null ? CLASS_BY_ID[id] ?? null : null);

const leveled = (file?.members ?? []).filter((m): m is ForeverMember & { level: number } => m.level != null);

export const foreverRoster = leveled.length
  ? (() => {
      const maxLevel = file!.maxLevel;
      const sorted = [...leveled].sort((a, b) => b.level - a.level || a.name.localeCompare(b.name));
      const bands = [
        { label: '1–19', min: 1, max: 19 },
        { label: '20–39', min: 20, max: 39 },
        { label: `40–${maxLevel - 1}`, min: 40, max: maxLevel - 1 },
        { label: `${maxLevel}`, min: maxLevel, max: Infinity },
      ].map(b => ({ ...b, count: sorted.filter(m => m.level >= b.min && m.level <= b.max).length }));
      return {
        updatedAt: file!.updatedAt,
        maxLevel,
        total: sorted.length,
        atMax: sorted.filter(m => m.level >= maxLevel).length,
        averageLevel: Math.round(sorted.reduce((s, m) => s + m.level, 0) / sorted.length),
        top: sorted.slice(0, 10),
        bands,
      };
    })()
  : null;
