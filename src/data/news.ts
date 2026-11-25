// Guild News and Announcements
// Hand-written posts live here. Boss kills and level-60 dings are added automatically
// to generated/auto-news.json by the daily job, and merged in `allNews` below.
import autoNews from './generated/auto-news.json';
export interface NewsPost {
  id: string;
  title: string;
  date: string; // ISO date string
  author: string;
  category: 'announcement' | 'raid' | 'recruitment' | 'guide' | 'event' | 'milestone';
  summary: string;
  content?: string; // Full content (optional, for future detail pages)
  pinned?: boolean;
  url?: string; // Optional link (auto posts link to Raider.io)
  auto?: boolean; // Written by scripts/update-site-data.mjs
}

export const news: NewsPost[] = [
  {
    id: 'forever-first-60s',
    title: 'Three goats at the summit',
    date: '2026-11-24',
    author: 'Billidan Stormrage',
    category: 'milestone',
    summary: 'Chieph Beef and Clo Vis reached level 60 first, and Mully Midrange followed a day later. That\'s three goats at the cap in WoW: Forever. Lia Valentine is next at 56, with Zet Blade a level behind at 55, as of Nov 25. The summit still has room.',
    pinned: true,
  },
  {
    id: 'venomous-abyss-aotc',
    title: 'Ahead of the Curve: The Venomous Abyss',
    date: '2026-10-06',
    author: 'GM',
    category: 'raid',
    summary: 'We cleared 8/8 Heroic in The Venomous Abyss. Mythic progression starts this week; sign up for raid nights in Discord.',
  },
  {
    id: 'wow-forever-plans',
    title: 'WoW: Forever survey results',
    date: '2026-10-09',
    author: 'Officer',
    category: 'announcement',
    summary: '22 goats answered the interest survey. Shaman, Priest, and Druid came out on top. The full breakdown is archived at the bottom of the roster page.',
  },
  {
    id: 'recruitment-s2',
    title: 'Recruiting for Venomous Abyss Mythic',
    date: '2026-10-01',
    author: 'Officer',
    category: 'recruitment',
    summary: 'With AOTC in the bag, we\'re recruiting all classes and roles for Mythic progression in The Venomous Abyss.',
  },
];

// Manual + automatic posts, newest first
export const allNews: NewsPost[] = [...news, ...(autoNews as NewsPost[])].sort((a, b) =>
  b.date.localeCompare(a.date),
);

// Upcoming events
export interface GuildEvent {
  title: string;
  date: string;
  time: string;
  description: string;
  type: 'raid' | 'social' | 'meeting' | 'other';
}

export const upcomingEvents: GuildEvent[] = [
  {
    title: 'Midnight: Echoes of the Worldcore Launches',
    date: '2026-12-01',
    time: 'Patch day',
    description: 'The new content update arrives, with Talebound and a return to Dornogal.',
    type: 'other',
  },
];
