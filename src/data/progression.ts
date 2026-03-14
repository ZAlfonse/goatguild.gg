// Current Raid Progression
export interface RaidProgress {
  name: string;
  difficulty: 'LFR' | 'Normal' | 'Heroic' | 'Mythic';
  bossesKilled: number;
  totalBosses: number;
  currentBoss?: string;
}

// Midnight Expansion Raids (Current)
export const currentTier: RaidProgress[] = [
  // The Voidspire (8 bosses) - Opens March 17
  {
    name: 'The Voidspire',
    difficulty: 'Heroic',
    bossesKilled: 0,
    totalBosses: 8,
  },
  {
    name: 'The Voidspire',
    difficulty: 'Mythic',
    bossesKilled: 0,
    totalBosses: 8,
  },
  // Dreamrift (4 bosses) - Opens March 17
  {
    name: 'Dreamrift',
    difficulty: 'Heroic',
    bossesKilled: 0,
    totalBosses: 4,
  },
  {
    name: 'Dreamrift',
    difficulty: 'Mythic',
    bossesKilled: 0,
    totalBosses: 4,
  },
  // March on Quel'Danas (8 bosses) - Opens March 31
  {
    name: "March on Quel'Danas",
    difficulty: 'Heroic',
    bossesKilled: 0,
    totalBosses: 8,
  },
  {
    name: "March on Quel'Danas",
    difficulty: 'Mythic',
    bossesKilled: 0,
    totalBosses: 8,
  },
];

// The War Within Expansion Raids (Previous)
export const twwTier: RaidProgress[] = [
  {
    name: 'Manaforge Omega',
    difficulty: 'Heroic',
    bossesKilled: 8,
    totalBosses: 8,
  },
  {
    name: 'Manaforge Omega',
    difficulty: 'Mythic',
    bossesKilled: 2,
    totalBosses: 8,
    currentBoss: "Loom'ithar",
  },
  {
    name: 'Liberation of Undermine',
    difficulty: 'Heroic',
    bossesKilled: 8,
    totalBosses: 8,
  },
  {
    name: 'Liberation of Undermine',
    difficulty: 'Mythic',
    bossesKilled: 1,
    totalBosses: 8,
    currentBoss: 'Cauldron of Carnage',
  },
  {
    name: "Nerub'ar Palace",
    difficulty: 'Heroic',
    bossesKilled: 8,
    totalBosses: 8,
  },
];

// Historical progression (most recent first)
export const previousTiers: RaidProgress[] = [
  {
    name: 'Amirdrassil',
    difficulty: 'Heroic',
    bossesKilled: 9,
    totalBosses: 9,
  },
  {
    name: 'Aberrus',
    difficulty: 'Heroic',
    bossesKilled: 9,
    totalBosses: 9,
  },
  // Add more previous tiers as needed
];

// Boss kill order / notable achievements
export const achievements = [
  { name: 'Ahead of the Curve: Queen Ansurek', date: 'October 2024' },
  { name: 'Ahead of the Curve: Chrome King Gallywix', date: 'April 2025' },
  { name: 'Ahead of the Curve: Dimensius', date: 'September 2025' },
];
