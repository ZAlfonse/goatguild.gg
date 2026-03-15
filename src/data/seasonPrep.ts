export interface PrepCard {
  id: string;
  title: string;
  icon: string;
  time: string;
  goldCost: string;
  statBoost: string;
  steps: string[];
}

export const seasonPrepCards: PrepCard[] = [
  {
    id: 'enchants',
    title: 'Buy Cheap Enchants',
    icon: '✨',
    time: '~10 min',
    goldCost: '~2,000g',
    statBoost: '+3-5% overall stats',
    steps: [
      'Go to {{wowhead:enchants|your spec\'s Wowhead enchanting guide}} and find the recommended enchants for your gear slots.',
      'Many of the silver tier enchants are very cheap and provide a solid stat boost. In particular, ring and leg enchants are very cheap. Buy those.',
    ],
  },
  {
    id: 'gems',
    title: 'Buy Cheap Gems',
    icon: '💎',
    time: '~10 min',
    goldCost: '~4,000g',
    statBoost: '+2-4% primary stat',
    steps: [
        'Go to {{wowhead:gems|your spec\'s Wowhead gemming guide}} and find the recommended gems for your gear slots.',
        'Always buy a diamond for the slot you think you\'ll keep the longest',
        'Pay attention to gem colors for optimal bonuses.'
    ],
  },
  {
    id: 'consumables',
    title: 'Buy Oils, Cheap Flasks, and Main Stat Food',
    icon: '🧪',
    time: '~10 min',
    goldCost: '~2,000g',
    statBoost: '+8-12% damage/healing',
    steps: [
      'Go to {{wowhead:consumables|your spec\'s Wowhead consumables guide}} and find the recommended oils, flasks, and food for your spec.',
      'Silver tier flasks, oils and food are very cheap right now.' 
    ],
  },
  {
    id: 'hearty-food',
    title: 'Train Cooking For Hearty Food',
    icon: '🍲',
    time: '~15 min',
    goldCost: '250g',
    statBoost: '+5-10% Main Stat from Keeping Food Buff After Death',
    steps: [
      'Buy 100 Plant Protein from the AH.',
      'Go to the cooking trainer at the Inn in Silvermoon.',
      'Learn Cooking and the Spiced Biscuit recipe.',
      'Buy ~50 Big Stick of Butter and ~150 Pouch of Spice from the vendor.',
      'Craft Spiced Biscuits until you hit 25 Cooking.',
      'Learn the Felberry Figs recipe from the trainer.',
      'Buy 40 Ripened Vegetables, 10 Big Stick of Butter, and 10 Mana-Wyrm Essence from the vendor.',
      'Craft 10 Felberry Figs to hit 35 Cooking — Hearty Food unlocks automatically.',
      'Combine 5 of any stat food to create the Hearty version (warbound, buff persists through death).',
    ],
  },
  {
    id: 'talents',
    title: 'Optimize Talent Builds',
    icon: '📘',
    time: '~10 min',
    goldCost: 'Free',
    statBoost: '+0-10% damage/healing from situational talent differences',
    steps: [
      'Go to {{wowhead:talents|your spec\'s Wowhead Talent Guide}}',
      'Save separate loadouts for Single-Target, AoE, and Cleave.',
      'Keybind any new abilities.',
      'Switch to the correct loadout before each encounter.',
    ],
  },
  {
    id: 'gearing',
    title: 'Craft A Weapon (Probably)',
    icon: '⚒️',
    time: '~15 min',
    goldCost: '~20,000g',
    statBoost: '+10-15% damage/healing from BiS crafted weapon',
    steps: [
      'Check {{wowhead:crafting|your spec\'s Wowhead crafting order guide}} to see which crafted piece is recommended first.',
      'Craft a 2h (staff) instead of multiple 1h (mh and oh) to save crests.',
      'Put in a guild crafting order for the recommended piece.',
    ],
  },
  {
    id: 'addons',
    title: 'Never Forget Your Buffs (BuffReminders Addon)',
    icon: '📦',
    time: '~2 min',
    goldCost: 'Free',
    statBoost: '+2-5% Damage/Healing depending on spec',
    steps: [
      'Search CurseForge or WoWUp for "BuffReminders" and install the addon.',
      'Use /buffreminders to open the configuration menu and move it around.',
      'Click the icons it makes to apply missing buffs.'
    ],
  },
  {
    id: 'macros',
    title: 'Macro Your Cooldowns and Racials',
    icon: '⌨️',
    time: '~5 min',
    goldCost: 'Free',
    statBoost: '+1-2% damage/healing from optimal racial usage',
    steps: [
        'Create a macro to use your abilities optimally in combat situations.',
        'For example: `/cast [combat] Blood Fury /cast [combat] Big Cooldown Spell`',
        'Test the macro on a target dummy to ensure it works as intended.',
    ],
  },
  { id: 'lights-potential',
    title: 'Buy and Macro Light\'s Potential Combat Potions',
    icon: '🔥',
    time: '~5 min',
    goldCost: 'Free',
    statBoost: '+1-2% damage/healing from optimal potion usage',
    steps: [
        'Buy 100 Light\'s Potential Combat Potions (Silver tier are very cheap).',
        'Macro them in to your main CD to set and forget. Or bind them separately if you want to use them more situationally.',
    ],
  }
];
