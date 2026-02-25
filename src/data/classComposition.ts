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
<<<<<<< HEAD
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
=======
  // Tanks (2)
  { player: 'Chieph', class: 'druid', spec: 'Guardian', role: 'tank', confirmed: true },
  { player: 'Wyatt', class: 'paladin', spec: 'Protection', role: 'tank', confirmed: true },
  // Healers (3)
  { player: 'Vateau', class: 'paladin', spec: 'Holy', role: 'healer', confirmed: true },
  { player: 'AndisNamis', class: 'evoker', spec: 'Preservation', role: 'healer', confirmed: true },
  { player: 'Liasham', class: 'druid', spec: 'Restoration', role: 'healer', confirmed: true },
  // Melee DPS (6)
  { player: 'Zak', class: 'shaman', spec: 'Enhancement', role: 'dps', confirmed: true },
  { player: 'Mully', class: 'shaman', spec: 'Enhancement', role: 'dps', confirmed: true, notes: 'Also plays Unholy DK' },
  { player: 'Makoblade', class: 'rogue', spec: 'Subtlety', role: 'dps', confirmed: true },
  { player: 'David(Goodroud', class: 'druid', spec: 'Feral', role: 'dps', confirmed: true, notes: 'Also plays Arms Warrior' },
  { player: 'Crageos', class: 'warrior', spec: 'Fury', role: 'dps', confirmed: true },
  { player: 'clovis', class: 'paladin', spec: 'Retribution', role: 'dps', confirmed: true },
  // Ranged DPS (2)
  { player: 'Mal', class: 'warlock', spec: 'Affliction', role: 'dps', confirmed: true },
  { player: 'Kelrud', class: 'hunter', spec: 'Marksmanship', role: 'dps', confirmed: true },
>>>>>>> 82999b4 (Update roster)
];

// Role targets for Midnight
export const roleTargets = {
  tank: { current: 2, target: 2 },
  healer: { current: 3, target: 5 },
  dps: { current: 8, target: 13 },
};
