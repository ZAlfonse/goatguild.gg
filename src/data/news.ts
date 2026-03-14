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
    id: 'midnight-launch-2026',
    title: 'Season 1 Release Schedule',
    date: '2026-03-09',
    author: 'GM',
    category: 'announcement',
    summary: 'March 17: Raids open (Normal/Heroic). March 24: Mythic raids & M+ Keystones available!',
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
  // Week of March 17
  {
    title: 'Season 1 Launch!',
    date: '2026-03-17',
    time: '11:00 AM EST',
    description: 'Voidspire & Dreamrift (Normal/Heroic/LFR Wing 1), Delves T8+, M0 dungeons, World Bosses, PvP Season 1!',
    type: 'raid',
  },
  {
    title: 'Guild Raid Night (Normal Voidspire + Dreamrift)',
    date: '2026-03-17',
    time: '8:00 PM EST',
    description: 'Leader: Vateau | 25 sign-ups (+1 late)',
    type: 'raid',
  },
  {
    title: 'Guild Raid Night Thur (Heroic Voidspire + Dreamrift)',
    date: '2026-03-19',
    time: '8:00 PM EST',
    description: 'First thursday guild raid night.',
    type: 'raid',
  },
  // Week of March 24
  {
    title: 'Mythic Week - RWF Begins!',
    date: '2026-03-24',
    time: '11:00 AM EST',
    description: 'M+ Keystones! Voidspire & Dreamrift Mythic opens. LFR Wing 2 & Story Mode. New Delve: The Darkway.',
    type: 'raid',
  },
  // March 31
  {
    title: 'March on Quel\'Danas Opens',
    date: '2026-03-31',
    time: '11:00 AM EST',
    description: 'New raid: March on Quel\'Danas (Normal/Heroic/Mythic). Voidspire LFR Wing 3. New Delve: Parhelion Plaza.',
    type: 'raid',
  },
  // April 7
  {
    title: 'March on Quel\'Danas LFR & Story',
    date: '2026-04-07',
    time: '11:00 AM EST',
    description: 'March on Quel\'Danas Raid Finder and Story Mode now available.',
    type: 'other',
  },
];
