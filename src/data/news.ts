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
    id: 'midnight-prep-2026',
    title: 'Midnight Class Selection Now Open!',
    date: '2026-02-01',
    author: 'GM',
    category: 'announcement',
    summary: 'Fill out the class selection form to lock in your main for Midnight!',
    pinned: true,
  },
  {
    id: 'recruitment-update',
    title: 'Recruiting for Midnight',
    date: '2026-01-20',
    author: 'Officer',
    category: 'recruitment',
    summary: 'Currently looking for all classes for our Midnight roster.',
  },
  {
    id: 'addon-update',
    title: 'Updated Addon Recommendations',
    date: '2026-01-15',
    author: 'Officer',
    category: 'guide',
    summary: 'We\'ve updated our recommended addon list and guild profiles. Check the Addons section for the latest imports.',
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
    title: 'Midnight Pre-Launch!',
    date: '2026-02-28',
    time: '5:00 PM EST',
    description: 'Join us for pre release Midnight to get a head start on leveling!',
    type: 'social',
  },
  {
    title: 'Midnight Official Launch!',
    date: '2026-03-03',
    time: '5:00 PM EST',
    description: 'Join us for day 1 in Midnight as we tackle the new content together!',
    type: 'social',
  },
];
