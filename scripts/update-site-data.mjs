#!/usr/bin/env node
// Daily site updater. Pulls public data and writes JSON into src/data/generated/.
//
//   1. Raider.io guild progression -> raider.json, plus a news post for every new boss kill
//   2. Blizzard blue-post tracker   -> blue-posts.json (filtered, deduped)
//   3. WoW: Forever roster levels   -> forever-roster.json, plus a news post when someone hits max level
//      (only runs when BLIZZARD_CLIENT_ID / BLIZZARD_CLIENT_SECRET are set)
//
// Each source is independent: if one fails, the others still update and the old JSON is kept.
// Run locally with:  node scripts/update-site-data.mjs

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'src/data/generated');
const UA = 'goatguild.gg-site-updater/1.0';

const GUILD = { region: 'us', realm: 'mal-ganis', name: 'Goat Guild', display: 'Goat Guild' };
const RAIDER_EXPANSIONS = [10, 11]; // TWW, Midnight. Add the next id when a new expansion launches.
const MAX_AUTO_NEWS = 40;
// Raider.io's names for combined tiers are cryptic; override them here.
const RAID_NAME_OVERRIDES = { 'tier-mn-1': 'Midnight Season 1 (Voidspire / Dreamrift / Quel\'Danas)' };
const MAX_BLUE_POSTS = 15;

const FOREVER = {
  clientId: process.env.BLIZZARD_CLIENT_ID,
  clientSecret: process.env.BLIZZARD_CLIENT_SECRET,
  // Forever has no realms: guilds are looked up by slug alone and characters are "First Last".
  // This API is community-documented, not official yet, so the namespace is overridable.
  guild: process.env.FOREVER_GUILD_SLUG || 'goat-guild',
  namespace: process.env.FOREVER_NAMESPACE || 'profile-forever-us',
  maxLevel: Number(process.env.FOREVER_MAX_LEVEL || 60),
};

// Temporary/manual level corrections. These are applied after the API snapshot and survive refreshes.
const FOREVER_LEVEL_OVERRIDES = {
  'Chieph Beef': 60,
  'Clo Vis': 60,
};

// ---------- helpers ----------

async function getJson(url, opts = {}) {
  const res = await fetch(url, { ...opts, headers: { 'User-Agent': UA, ...(opts.headers || {}) } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.json();
}

async function getText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.text();
}

async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile(join(OUT, file), 'utf8'));
  } catch {
    return fallback;
  }
}

async function writeJson(file, data) {
  await writeFile(join(OUT, file), JSON.stringify(data, null, 2) + '\n');
}

// Run fn over items with at most `limit` requests in flight.
async function mapLimit(items, limit, fn) {
  const queue = [...items];
  await Promise.all(Array.from({ length: Math.min(limit, queue.length) }, async () => {
    while (queue.length) await fn(queue.shift());
  }));
}

// Guild runs on Eastern time, so a Tuesday-night kill is dated Tuesday, not Wednesday UTC.
const today = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/New_York' });

function decodeEntities(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');
}

function stripHtml(html) {
  return decodeEntities(decodeEntities(html).replace(/<[^>]+>/g, ' '))
    .replace(/View Full Article/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncate(s, n) {
  if (s.length <= n) return s;
  return s.slice(0, s.lastIndexOf(' ', n)).replace(/[,.;:]$/, '') + '…';
}

function parseRss(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item]) => {
    const tag = (t) => {
      const m = item.match(new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`));
      return m ? m[1] : '';
    };
    return {
      title: decodeEntities(tag('title')).trim(),
      link: decodeEntities(tag('link')).trim(),
      date: new Date(tag('pubDate')).toISOString(),
      description: tag('description'),
    };
  });
}

// ---------- 1. Raider.io progression ----------

const DIFFS = ['normal', 'heroic', 'mythic'];
const DIFF_LABEL = { normal: 'Normal', heroic: 'Heroic', mythic: 'Mythic' };

async function updateRaider(newPosts) {
  const q = new URLSearchParams({
    region: GUILD.region,
    realm: GUILD.realm,
    name: GUILD.name,
    fields: 'raid_progression,raid_rankings',
  });
  const profile = await getJson(`https://raider.io/api/v1/guilds/profile?${q}`);

  const raidNames = {};
  for (const exp of RAIDER_EXPANSIONS) {
    try {
      const data = await getJson(`https://raider.io/api/v1/raiding/static-data?expansion_id=${exp}`);
      for (const r of data.raids) raidNames[r.slug] = r.name;
    } catch (e) {
      console.warn(`  static-data for expansion ${exp} failed: ${e.message}`);
    }
  }

  const prev = await readJson('raider.json', null);
  const raids = {};
  for (const [slug, p] of Object.entries(profile.raid_progression)) {
    raids[slug] = {
      name: RAID_NAME_OVERRIDES[slug] || raidNames[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      totalBosses: p.total_bosses,
      summary: p.summary,
      killed: { normal: p.normal_bosses_killed, heroic: p.heroic_bosses_killed, mythic: p.mythic_bosses_killed },
      rankings: profile.raid_rankings?.[slug] ?? null,
    };
  }

  // Only diff against a previous snapshot. The first run just records a baseline so it
  // doesn't flood the news feed with every kill the guild has ever made.
  if (prev?.raids) {
    for (const [slug, raid] of Object.entries(raids)) {
      const before = prev.raids[slug]?.killed ?? { normal: 0, heroic: 0, mythic: 0 };
      // Report the highest difficulty that moved, so one night's clear makes one post, not three.
      const moved = DIFFS.filter((d) => raid.killed[d] > before[d]);
      if (!moved.length) continue;
      const diff = moved[moved.length - 1];
      const gained = raid.killed[diff] - before[diff];
      const cleared = raid.killed[diff] === raid.totalBosses;
      const rank = raid.rankings?.[diff]?.realm;

      // Copy follows the voice guide in CLAUDE.md: plain, no exclamation marks, no emoji.
      const title = cleared
        ? diff === 'heroic'
          ? `Ahead of the Curve: ${raid.name}`
          : diff === 'mythic'
            ? `Cutting Edge: ${raid.name}`
            : `${raid.name} ${DIFF_LABEL[diff]} cleared`
        : `${gained} new ${DIFF_LABEL[diff]} boss${gained > 1 ? 'es' : ''} down in ${raid.name}`;
      const summary =
        `The goats are now ${raid.killed[diff]}/${raid.totalBosses} ${DIFF_LABEL[diff]} in ${raid.name}` +
        (rank ? `, #${rank} on Mal'Ganis.` : '.');

      newPosts.push({
        id: `kill-${slug}-${diff}-${raid.killed[diff]}`,
        title,
        date: today(),
        author: 'Goat Bot',
        category: 'raid',
        summary,
        url: profile.profile_url,
        auto: true,
      });
    }
  } else {
    console.log('  no previous snapshot, recording baseline (no kill posts this run)');
  }

  await writeJson('raider.json', {
    updatedAt: new Date().toISOString(),
    profileUrl: profile.profile_url,
    lastCrawledAt: profile.last_crawled_at,
    raids,
  });
  console.log(`  ${Object.keys(raids).length} raids recorded`);
}

// ---------- 2. Blue posts ----------

const BLUE_FEED = 'https://us.forums.blizzard.com/en/wow/groups/blizzard-tracker/posts.rss';
// Marketing and shop posts nobody in guild chat cares about.
const BLUE_EXCLUDE = /pre-?purchase|last call|shop|sale\b|savings|bundle|twitch drops|mcdonald|d&d|trading post/i;
// Topics where Blizzard keeps appending replies (hotfix threads). Every other topic only counts
// when Blizzard started it (post #1), which drops blue replies buried in player complaint threads.
const BLUE_LIVE_THREADS = /hotfix|known issues|tuning/i;

async function updateBluePosts() {
  const items = parseRss(await getText(BLUE_FEED));
  const prev = await readJson('blue-posts.json', { posts: [] });

  const byTopic = new Map(prev.posts.map((p) => [p.topicId, p]));
  for (const it of items) {
    const m = it.link.match(/\/t\/[^/]+\/(\d+)\/(\d+)/);
    if (!m) continue;
    const [, topicId, postNum] = m;
    if (BLUE_EXCLUDE.test(it.title)) continue;
    if (postNum !== '1' && !BLUE_LIVE_THREADS.test(it.title)) continue;

    const existing = byTopic.get(topicId);
    if (existing && existing.date >= it.date) continue;
    byTopic.set(topicId, {
      topicId,
      title: it.title,
      date: it.date,
      url: it.link.replace(/\/\d+$/, postNum === '1' ? '' : `/${postNum}`),
      summary: truncate(stripHtml(it.description), 220),
      game: /forever/i.test(it.title + it.description) ? 'forever' : 'retail',
    });
  }

  // Blizzard sometimes posts the same announcement twice under different topic ids.
  const seenTitles = new Set();
  const posts = [...byTopic.values()]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((p) => {
      const key = p.title.toLowerCase();
      if (seenTitles.has(key)) return false;
      seenTitles.add(key);
      return true;
    })
    .slice(0, MAX_BLUE_POSTS);

  await writeJson('blue-posts.json', { updatedAt: new Date().toISOString(), source: BLUE_FEED, posts });
  console.log(`  ${posts.length} blue posts kept`);
}

// ---------- 3. WoW: Forever roster (optional) ----------

async function updateForever(newPosts) {
  const { clientId, clientSecret, guild, namespace, maxLevel } = FOREVER;
  if (!clientId || !clientSecret) {
    console.log('  skipped (set BLIZZARD_CLIENT_ID and BLIZZARD_CLIENT_SECRET to enable)');
    return;
  }

  const token = await getJson('https://oauth.battle.net/token', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });
  const auth = { headers: { Authorization: `Bearer ${token.access_token}` } };
  const api = (path) => getJson(`https://us.api.blizzard.com${path}?namespace=${namespace}&locale=en_US`, auth);
  const roster = await api(`/data/wow/guild/${guild}/roster`);

  const now = new Date().toISOString();
  const day = today();
  const current = roster.members.map((m) => {
    const c = m.character ?? m;
    const name = [c.name, c.surname].filter(Boolean).join(' '); // "First Last" is unique per region
    return {
      name,
      slug: c.slug ?? [c.name, c.surname].filter(Boolean).join('-').toLowerCase(),
      level: FOREVER_LEVEL_OVERRIDES[name] ?? c.level ?? null,
      classId: c.playable_class?.id ?? null,
      rank: m.rank ?? null,
      lastLogin: null,
    };
  });
  if (current.length && current.every((m) => m.level == null)) {
    // The unofficial API's field names may differ; log one raw member so we can adjust.
    console.warn('  roster has no level field; sample member:', JSON.stringify(roster.members[0]).slice(0, 500));
  }

  // The roster has no timestamps, but each character profile has last_login_timestamp. A level-up
  // between two syncs happened in the session ending then, so it dates level-ups far better than
  // the sync time does (and gives the roster a "last seen" column).
  // Forever's API only exposes characters from level 10 up, so lower ones would just 404.
  let profileFailures = 0;
  await mapLimit(current.filter((m) => (m.level ?? 0) >= 10), 8, async (m) => {
    try {
      const profile = await api(`/profile/wow/character/${encodeURIComponent(m.slug)}`);
      if (profile.last_login_timestamp) m.lastLogin = new Date(profile.last_login_timestamp).toISOString();
    } catch {
      profileFailures++;
    }
  });
  if (profileFailures) console.warn(`  ${profileFailures} character profile(s) failed to load`);

  const prev = await readJson('forever-roster.json', null);
  const prevByName = new Map((prev?.members ?? []).map((m) => [m.name, m]));
  const isBaseline = !prev?.members;
  const since = prev?.updatedAt ?? null;
  const activity = prev?.activity ?? [];
  const fresh = [];

  // When something happened since the last sync. last_login_timestamp is set at login, so it only
  // dates the event if the session started inside the window. Otherwise all we know is the window
  // itself: approx, between `after` (last sync) and `at` (this sync).
  const when = (m) =>
    m.lastLogin && since && m.lastLogin > since && m.lastLogin <= now
      ? { at: m.lastLogin }
      : { at: now, approx: true, ...(since ? { after: since } : {}) };

  const members = current.map((m) => {
    const before = prevByName.get(m.name);
    const out = {
      ...m,
      firstSeen: before?.firstSeen ?? day,
      lastLevelUp: before?.lastLevelUp ?? null,
    };
    if (!isBaseline) {
      if (!before) {
        fresh.push({ type: 'joined', ...when(m), name: m.name, classId: m.classId, level: m.level });
      } else if (m.level != null && before.level != null && m.level > before.level) {
        const t = when(m);
        out.lastLevelUp = t.at;
        fresh.push({ type: 'level', ...t, name: m.name, classId: m.classId, from: before.level, to: m.level });
      }
    }
    return out;
  });

  // Achievements carry exact completion times. Only check characters who logged in since the last sync.
  if (!isBaseline && since) {
    const played = members.filter((m) => m.lastLogin && m.lastLogin > since && prevByName.has(m.name));
    const sinceMs = new Date(since).getTime();
    let achievementCount = 0;
    await mapLimit(played, 8, async (m) => {
      try {
        const data = await api(`/profile/wow/character/${encodeURIComponent(m.slug)}/achievements`);
        for (const a of data.achievements ?? []) {
          if (!a.completed_timestamp || a.completed_timestamp <= sinceMs || !a.achievement?.name) continue;
          fresh.push({
            type: 'achievement',
            at: new Date(a.completed_timestamp).toISOString(),
            name: m.name,
            classId: m.classId,
            achievement: a.achievement.name,
          });
          achievementCount++;
        }
      } catch {
        // A missing achievements page shouldn't block the rest of the sync.
      }
    });
    console.log(`  ${played.length} character(s) played since last sync, ${achievementCount} achievement(s)`);
  }
  if (isBaseline) console.log('  no previous roster, recording baseline (no activity or ding posts this run)');

  // Daily level snapshots (last 31 days) power "levels gained this week".
  const history = { ...(prev?.history ?? {}) };
  history[day] = Object.fromEntries(members.filter((m) => m.level != null).map((m) => [m.name, m.level]));
  for (const d of Object.keys(history).sort().slice(0, -31)) delete history[d];

  const dinged = fresh.filter((e) => e.type === 'level' && e.to >= maxLevel && e.from < maxLevel);
  if (dinged.length) {
    const names = dinged.map((e) => e.name);
    const list = names.length === 1 ? names[0] : `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`;
    const total = members.filter((m) => m.level >= maxLevel).length;
    newPosts.push({
      id: `forever-ding-${day}-${names.join('-').toLowerCase().replace(/[^a-z0-9-]/g, '')}`,
      title: `${list} reached level ${maxLevel}`,
      date: day,
      author: 'Goat Bot',
      category: 'milestone',
      summary: total === 1 ? `The first goat at the level cap in WoW: Forever.` : `That's ${total} goats at the level cap in WoW: Forever.`,
      auto: true,
    });
  }

  await writeJson('forever-roster.json', {
    updatedAt: now,
    maxLevel,
    members,
    activity: [...fresh, ...activity].sort((a, b) => b.at.localeCompare(a.at)).slice(0, 200),
    history,
  });
  console.log(
    `  ${members.length} members, ${members.filter((m) => m.level >= maxLevel).length} at max level, ${fresh.length} new activity event(s)`,
  );
}

// ---------- main ----------

await mkdir(OUT, { recursive: true });
const newPosts = [];
const failed = [];

for (const [label, fn] of [
  ['Raider.io progression', () => updateRaider(newPosts)],
  ['Blue posts', updateBluePosts],
  ['WoW: Forever roster', () => updateForever(newPosts)],
]) {
  console.log(`${label}:`);
  try {
    await fn();
  } catch (e) {
    failed.push(label);
    console.error(`  FAILED: ${e.message}`);
  }
}

const autoNews = await readJson('auto-news.json', []);
const ids = new Set(autoNews.map((p) => p.id));
const fresh = newPosts.filter((p) => !ids.has(p.id));
await writeJson('auto-news.json', [...fresh, ...autoNews].slice(0, MAX_AUTO_NEWS));
console.log(`News: ${fresh.length} new auto post(s)${fresh.length ? ': ' + fresh.map((p) => p.title).join(' | ') : ''}`);

// Fail the job only if both core sources failed, so one flaky API doesn't block the deploy.
if (failed.includes('Raider.io progression') && failed.includes('Blue posts')) process.exit(1);
