// Current Raid Progression
export interface RaidProgress {
  name: string;
  difficulty: 'LFR' | 'Normal' | 'Heroic' | 'Mythic';
  bossesKilled: number;
  totalBosses: number;
  currentBoss?: string;
}

export const currentTier: RaidProgress[] = [
  {
    name: 'Manaforge Omega',
    difficulty: 'Mythic',
    bossesKilled: 2,
    totalBosses: 8,
    currentBoss: "Loom'ithar",
  },
  {
    name: 'Manaforge Omega',
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
    name: 'Liberation of Undermine',
    difficulty: 'Heroic',
    bossesKilled: 8,
    totalBosses: 8,
  },
  {
    name: 'Nerub-ar Palace',
    difficulty: 'Mythic',
    bossesKilled: 4,
    totalBosses: 8,
    currentBoss: 'Broodtwister Ovi\'nax',
  },
  {
    name: 'Nerub-ar Palace',
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
  {
    name: 'Vault of the Incarnates',
    difficulty: 'Mythic',
    bossesKilled: 2,
    totalBosses: 8,
  },
  // Add more previous tiers as needed
];

// Boss kill order / notable achievements
export const achievements = [
  { name: 'Ahead of the Curve: Queen Ansurek', date: 'October 2024' },
  { name: 'Ahead of the Curve: Chrome King Gallywix', date: 'April 2025' },
  { name: 'Ahead of the Curve: Dimensius', date: 'September 2025' },
];
