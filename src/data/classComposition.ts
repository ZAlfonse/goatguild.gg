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
  // Tanks (2)
  { player: 'Chieph', class: 'druid', spec: 'Guardian', role: 'tank', confirmed: true },
  { player: 'Wyatt', class: 'paladin', spec: 'Protection', role: 'tank', confirmed: true },
  // Healers (3)
  { player: 'Vateau', class: 'paladin', spec: 'Holy', role: 'healer', confirmed: true },
  { player: 'AndisNamis', class: 'evoker', spec: 'Preservation', role: 'healer', confirmed: true },
  { player: 'Liasham', class: 'shaman', spec: 'Restoration', role: 'healer', confirmed: true },
  { player: 'Lasciel', class: 'priest', spec: 'Holy', role: 'healer', confirmed: true },
  { player: 'Restodeez', class: 'druid', spec: 'Restoration', role: 'healer', confirmed: true },
  // Melee DPS (6)
  { player: 'Zak', class: 'shaman', spec: 'Enhancement', role: 'dps', confirmed: true },
  { player: 'Mully', class: 'deathknight', spec: 'Unholy', role: 'dps', confirmed: true, notes: 'Also plays Unholy DK' },
  { player: 'Makoblade', class: 'rogue', spec: 'Subtlety', role: 'dps', confirmed: true },
  { player: 'David(Goodroud', class: 'druid', spec: 'Feral', role: 'dps', confirmed: true, notes: 'Also plays Arms Warrior' },
  { player: 'Crageos', class: 'warrior', spec: 'Fury', role: 'dps', confirmed: true },
  { player: 'Clovis', class: 'paladin', spec: 'Retribution', role: 'dps', confirmed: true },
  { player: 'Tazstinko', class: 'warrior', spec: 'Fury', role: 'dps', confirmed: true },
  // Ranged DPS (7)
  { player: 'Mal', class: 'warlock', spec: 'Affliction', role: 'dps', confirmed: true },
  { player: 'Kelrud', class: 'hunter', spec: 'Marksmanship', role: 'dps', confirmed: true },
  { player: 'Buttburper', class: 'warlock', spec: 'Affliction', role: 'dps', confirmed: true },
  { player: 'Krazykiller', class: 'hunter', spec: 'Beast Mastery', role: 'dps', confirmed: true },
  { player: 'Jon', class: 'mage', spec: 'Arcane', role: 'dps', confirmed: true },
  { player: 'Rheunom', class: 'demonhunter', spec: 'Devourer', role: 'dps', confirmed: true },
  { player: 'Pepsivoker', class: 'evoker', spec: 'Augmentation', role: 'dps', confirmed: true },
];

// Role targets for Midnight
export const roleTargets = {
  tank: { current: 2, target: 2 },
  healer: { current: 5, target: 5 },
  dps: { current: 13, target: 13 },
};
