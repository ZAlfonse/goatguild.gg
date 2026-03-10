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
  // Week of March 17
  {
    title: 'Season 1 Launch!',
    date: '2026-03-17',
    time: '11:00 AM EST',
    description: 'Voidspire & Dreamrift (Normal/Heroic/LFR Wing 1), Delves T8+, Heroic/M0 dungeons, World Bosses, PvP Season 1!',
    type: 'raid',
  },
  {
    title: 'Guild Normal Voidspire',
    date: '2026-03-19',
    time: '8:00 PM EST',
    description: 'First guild raid night - Normal Voidspire clear.',
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
  {
    title: 'RWF Watch Party',
    date: '2026-03-28',
    time: '2:00 PM EST',
    description: 'Join us in Discord to watch the Race to World First progress!',
    type: 'social',
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
