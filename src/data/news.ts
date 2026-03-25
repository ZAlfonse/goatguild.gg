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
    id: 'goat-push-s1-bounties',
    title: '🐐 The Goat Push - M+ Bounties',
    date: '2026-03-24',
    author: 'GM',
    category: 'event',
    summary: 'Mega Goat Bounty: Time a +14 key with 4+ guildies for a ~30k consumable package. Giga Goat Bounty: First full guild group (5/5) to time a +?? key splits 300,000g!',
    content: `🐐 🐐 The Goat Push - Midnight Season 1 M+ Bounties 🐐 🐐

Mega Goat Bounty
🏆 Goal: Time a +14 key in a group with at least 4 guild members. Bounty may be earned once per player.
💎 Reward: Consumable package valued ~30,000g (may vary) containing combat/health/mana pots, flasks, food.

Giga Goat Bounty
🏆 Goal: Time the first +?? key in a full guild group (5/5). Bounty disappears after first claim.
💎 Reward: 300,000g split.

📜 Rules
• Team members must have been in Guild for at least 2 weeks.
• Giga goat key level requirement TBD.
• To submit a bounty, reply to RaiderIO bot url with your key and @ me or a GoatOfficer.`,
    pinned: true,
  },
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
