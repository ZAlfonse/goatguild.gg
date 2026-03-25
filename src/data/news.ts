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
