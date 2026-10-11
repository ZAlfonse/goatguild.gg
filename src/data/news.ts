// Guild News and Announcements
export interface NewsPost {
  id: string;
  title: string;
  date: string; // ISO date string
  author: string;
  category: 'announcement' | 'raid' | 'recruitment' | 'guide' | 'event';
  summary: string;
  content?: string; // Full content (optional, for future detail pages)
  pinned?: boolean;
}

export const news: NewsPost[] = [
  {
    id: 'venomous-abyss-aotc',
    title: '🐍 AOTC: The Venomous Abyss — Mythic Prog Begins',
    date: '2026-10-06',
    author: 'GM',
    category: 'raid',
    summary: 'We cleared 8/8 Heroic in The Venomous Abyss for Ahead of the Curve! Mythic progression starts this week — sign up for raid nights and get your gear sorted.',
    pinned: true,
  },
  {
    id: 'wow-forever-plans',
    title: '🏔️ Our WoW: Forever Plans Are In',
    date: '2026-10-09',
    author: 'Officer',
    category: 'announcement',
    summary: '22 goats answered the WoW: Forever interest survey. Shaman, Priest, and Druid lead the pack. Check the full class and faction breakdown on the WoW Forever page.',
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
    title: 'Venomous Abyss Mythic Prog',
    date: '2026-10-13',
    time: '8:00 PM EST',
    description: 'First Mythic progression night in The Venomous Abyss. Bring flasks, pots, and your A-game.',
    type: 'raid',
  },
  {
    title: 'Venomous Abyss Mythic Prog',
    date: '2026-10-15',
    time: '8:00 PM EST',
    description: 'Mythic progression continues. Sign up in Discord.',
    type: 'raid',
  },
];
