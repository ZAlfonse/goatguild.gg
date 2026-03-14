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
  { player: 'Chieph', class: 'monk', spec: 'Brewmaster', role: 'tank', confirmed: true },
  { player: 'Wyatt', class: 'paladin', spec: 'Protection', role: 'tank', confirmed: true },
  // Healers (6)
  { player: 'Vateau', class: 'paladin', spec: 'Holy', role: 'healer', confirmed: true },
  { player: 'Dragonbox', class: 'evoker', spec: 'Preservation', role: 'healer', confirmed: true },
  { player: 'Liasham', class: 'shaman', spec: 'Restoration', role: 'healer', confirmed: true },
  { player: 'Lasciel', class: 'priest', spec: 'Holy', role: 'healer', confirmed: true },
  { player: 'Restodeez', class: 'druid', spec: 'Restoration', role: 'healer', confirmed: true },
  { player: 'AndisNamis', class: 'evoker', spec: 'Preservation', role: 'healer', confirmed: true },
  // Melee DPS (8)
  { player: 'Drack', class: 'demonhunter', spec: 'Havoc', role: 'dps', confirmed: true },
  { player: 'Makoblade', class: 'rogue', spec: 'Subtlety', role: 'dps', confirmed: true },
  { player: 'Crageos', class: 'warrior', spec: 'Fury', role: 'dps', confirmed: true },
  { player: 'Clovis', class: 'paladin', spec: 'Retribution', role: 'dps', confirmed: true },
  { player: 'Sanguinous', class: 'paladin', spec: 'Retribution', role: 'dps', confirmed: true },
  { player: 'Mully', class: 'deathknight', spec: 'Unholy', role: 'dps', confirmed: true, notes: 'Also plays Unholy DK' },
  { player: 'David', class: 'druid', spec: 'Feral', role: 'dps', confirmed: true, notes: 'Also plays Arms Warrior' },
  { player: 'Ruin', class: 'rogue', spec: 'Assassination', role: 'dps', confirmed: true },
  // Ranged DPS (10)
  { player: 'Krazykiller', class: 'hunter', spec: 'Beast Mastery / Marksmanship', role: 'dps', confirmed: true },
  { player: 'PepsiPerson', class: 'evoker', spec: 'Augmentation', role: 'dps', confirmed: true },
  { player: 'KCC', class: 'warlock', spec: 'Demonology', role: 'dps', confirmed: true },
  { player: 'Buttburper', class: 'warlock', spec: 'Demonology / Devastation', role: 'dps', confirmed: true, notes: 'Also plays Devastation Evoker' },
  { player: 'Rheunon', class: 'demonhunter', spec: 'Devourer', role: 'dps', confirmed: true },
  { player: 'Kelrud', class: 'hunter', spec: 'Marksmanship', role: 'dps', confirmed: true },
  { player: 'Jøñ', class: 'mage', spec: 'Arcane', role: 'dps', confirmed: true, notes: 'Also known as Garchomps' },
  { player: 'Zak', class: 'mage', spec: 'Arcane', role: 'dps', confirmed: true },
  { player: 'Platinga', class: 'priest', spec: 'Shadow', role: 'dps', confirmed: true },
  { player: 'Mal', class: 'warlock', spec: 'Affliction', role: 'dps', confirmed: true },

  // Late (1)
  { player: 'Thraln', class: 'warlock', spec: 'Demonology', role: 'dps', confirmed: true, notes: 'Late signup, also known as Tuatev' },
];

// Role targets for Midnight
export const roleTargets = {
  tank: { current: 2, target: 2 },
  healer: { current: 6, target: 6 },
  dps: { current: 18, target: 18 },
};
