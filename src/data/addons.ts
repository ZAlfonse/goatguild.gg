// Recommended Addons for Guild Members
export interface Addon {
  name: string;
  description: string;
  required: boolean; // Required for raiding
  category: 'raiding' | 'ui' | 'utility' | 'class';
  downloadUrl: string;
  wowInterfaceId?: string;
  curseforgeSlug?: string;
  guildProfileUrl?: string; // Link to guild's custom profile/import string
}

export const addons: Addon[] = [
  // Required Raiding Addons
  {
    name: 'BigWigs / LittleWigs',
    description: 'Boss mod for raid and dungeon encounters. Provides timers, warnings, and alerts.',
    required: true,
    category: 'raiding',
    downloadUrl: 'https://www.curseforge.com/wow/addons/big-wigs',
    curseforgeSlug: 'big-wigs',
  },
  {
    name: 'Details! Damage Meter',
    description: 'Combat log analysis and damage/healing meters.',
    required: true,
    category: 'raiding',
    downloadUrl: 'https://www.curseforge.com/wow/addons/details',
    curseforgeSlug: 'details',
  },

  // Recommended UI
  {
    name: 'Plater Nameplates',
    description: 'Highly customizable nameplate addon. Recommended for M+ and raiding.',
    required: false,
    category: 'ui',
    downloadUrl: 'https://www.curseforge.com/wow/addons/plater-nameplates',
    curseforgeSlug: 'plater-nameplates',
    guildProfileUrl: '/profiles/plater-goatguild.txt',
  },

  // Utility
  {
    name: 'Simulationcraft',
    description: 'Export your character for sim optimization.',
    required: false,
    category: 'utility',
    downloadUrl: 'https://www.curseforge.com/wow/addons/simulationcraft',
    curseforgeSlug: 'simulationcraft',
  },
];

// Guild addon profiles available for download
export const guildProfiles = [
  {
    addon: 'Plater',
    name: 'Jundies Nameplates',
    description: 'Custom Plater profile optimized for raid visibility and clarity.',
    downloadPath: 'https://wago.io/ak3iS95aa',
    lastUpdated: '2026-02-03',
  },
];
