// Tentative Midnight Class Composition
export type WowClass =
  | 'warrior'
  | 'paladin'
  | 'hunter'
  | 'rogue'
  | 'priest'
  | 'shaman'
  | 'mage'
  | 'warlock'
  | 'monk'
  | 'druid'
  | 'demonhunter'
  | 'deathknight'
  | 'evoker';

export type Role = 'tank' | 'healer' | 'dps';

export interface ClassPick {
  player: string;
  class: WowClass;
  spec: string;
  role: Role;
  confirmed: boolean; // Whether they've confirmed their pick
  notes?: string;
}

// Update this list with your guild's actual class picks
export const midnightRoster: ClassPick[] = [
  // Confirmed
  { player: 'Zakage', class: 'mage', spec: 'Arcane', role: 'dps', confirmed: true },
  { player: 'Flayvia', class: 'druid', spec: 'Restoration', role: 'healer', confirmed: true },
  { player: 'Unknown', class: 'warlock', spec: 'Destruction', role: 'dps', confirmed: true },
  { player: 'Unknown', class: 'priest', spec: 'Shadow', role: 'dps', confirmed: true },
  { player: 'Bloodieph', class: 'deathknight', spec: 'Blood', role: 'tank', confirmed: true },
  { player: 'Gotdazoomies', class: 'druid', spec: 'Feral', role: 'dps', confirmed: true },
  { player: 'Unknown', class: 'hunter', spec: 'Beast Mastery', role: 'dps', confirmed: true },
  { player: 'Unknown', class: 'hunter', spec: 'Marksmanship', role: 'dps', confirmed: true },
  { player: 'Unknown', class: 'rogue', spec: 'Outlaw', role: 'dps', confirmed: true },
  { player: 'Unknown', class: 'demonhunter', spec: 'Devourer', role: 'dps', confirmed: true },
  { player: 'Unknown', class: 'rogue', spec: 'Assassination', role: 'dps', confirmed: true },
  { player: 'Unknown', class: 'warlock', spec: 'Affliction', role: 'dps', confirmed: true },
  { player: 'Unknown', class: 'shaman', spec: 'Enhancement', role: 'dps', confirmed: true },
  { player: 'Unknown', class: 'shaman', spec: 'Restoration', role: 'healer', confirmed: true },
  { player: 'Unknown', class: 'rogue', spec: 'Assassination', role: 'dps', confirmed: true },
  { player: 'Unknown', class: 'shaman', spec: 'Enhancement', role: 'dps', confirmed: true },
  { player: 'Unknown', class: 'rogue', spec: 'Subtlety', role: 'dps', confirmed: true },
];

// Role targets for Midnight
export const roleTargets = {
  tank: { current: 1, target: 2 },
  healer: { current: 2, target: 5 },
  dps: { current: 14, target: 13 },
};
