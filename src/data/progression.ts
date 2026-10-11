// Current Raid Progression
export interface RaidProgress {
  name: string;
  difficulty: 'LFR' | 'Normal' | 'Heroic' | 'Mythic';
  bossesKilled: number;
  totalBosses: number;
  currentBoss?: string;
}

// Midnight Season 2 (Current) — The Venomous Abyss
export const currentTier: RaidProgress[] = [
  {
    name: 'The Venomous Abyss',
    difficulty: 'Heroic',
    bossesKilled: 8,
    totalBosses: 8,
  },
  {
    name: 'The Venomous Abyss',
    difficulty: 'Mythic',
    bossesKilled: 0,
    totalBosses: 8,
  },
];

// Midnight Season 1 Raids (Previous Season) — AOTC in all three
export const midnightS1Tier: RaidProgress[] = [
  {
    name: 'The Voidspire',
    difficulty: 'Heroic',
    bossesKilled: 6,
    totalBosses: 6,
  },
  {
    name: 'The Dreamrift',
    difficulty: 'Heroic',
    bossesKilled: 1,
    totalBosses: 1,
  },
  {
    name: "March on Quel'Danas",
    difficulty: 'Heroic',
    bossesKilled: 2,
    totalBosses: 2,
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
  { name: 'Ahead of the Curve: The Venomous Abyss', date: 'October 2026' },
  { name: 'Ahead of the Curve: The Voidspire', date: '2026' },
  { name: 'Ahead of the Curve: The Dreamrift', date: '2026' },
  { name: "Ahead of the Curve: March on Quel'Danas", date: '2026' },
  { name: 'Ahead of the Curve: Queen Ansurek', date: 'October 2024' },
  { name: 'Ahead of the Curve: Chrome King Gallywix', date: 'April 2025' },
  { name: 'Ahead of the Curve: Dimensius', date: 'September 2025' },
];
