export interface WowSpec {
  class: string;
  spec: string;
  role: 'Tank' | 'Healer' | 'DPS';
}

export const wowSpecs: WowSpec[] = [
  // Death Knight
  { class: 'Death Knight', spec: 'Blood', role: 'Tank' },
  { class: 'Death Knight', spec: 'Frost', role: 'DPS' },
  { class: 'Death Knight', spec: 'Unholy', role: 'DPS' },
  // Demon Hunter
  { class: 'Demon Hunter', spec: 'Havoc', role: 'DPS' },
  { class: 'Demon Hunter', spec: 'Vengeance', role: 'Tank' },
  { class: 'Demon Hunter', spec: 'Devourer', role: 'DPS' },
  // Druid
  { class: 'Druid', spec: 'Balance', role: 'DPS' },
  { class: 'Druid', spec: 'Feral', role: 'DPS' },
  { class: 'Druid', spec: 'Guardian', role: 'Tank' },
  { class: 'Druid', spec: 'Restoration', role: 'Healer' },
  // Evoker
  { class: 'Evoker', spec: 'Augmentation', role: 'DPS' },
  { class: 'Evoker', spec: 'Devastation', role: 'DPS' },
  { class: 'Evoker', spec: 'Preservation', role: 'Healer' },
  // Hunter
  { class: 'Hunter', spec: 'Beast Mastery', role: 'DPS' },
  { class: 'Hunter', spec: 'Marksmanship', role: 'DPS' },
  { class: 'Hunter', spec: 'Survival', role: 'DPS' },
  // Mage
  { class: 'Mage', spec: 'Arcane', role: 'DPS' },
  { class: 'Mage', spec: 'Fire', role: 'DPS' },
  { class: 'Mage', spec: 'Frost', role: 'DPS' },
  // Monk
  { class: 'Monk', spec: 'Brewmaster', role: 'Tank' },
  { class: 'Monk', spec: 'Mistweaver', role: 'Healer' },
  { class: 'Monk', spec: 'Windwalker', role: 'DPS' },
  // Paladin
  { class: 'Paladin', spec: 'Holy', role: 'Healer' },
  { class: 'Paladin', spec: 'Protection', role: 'Tank' },
  { class: 'Paladin', spec: 'Retribution', role: 'DPS' },
  // Priest
  { class: 'Priest', spec: 'Discipline', role: 'Healer' },
  { class: 'Priest', spec: 'Holy', role: 'Healer' },
  { class: 'Priest', spec: 'Shadow', role: 'DPS' },
  // Rogue
  { class: 'Rogue', spec: 'Assassination', role: 'DPS' },
  { class: 'Rogue', spec: 'Outlaw', role: 'DPS' },
  { class: 'Rogue', spec: 'Subtlety', role: 'DPS' },
  // Shaman
  { class: 'Shaman', spec: 'Elemental', role: 'DPS' },
  { class: 'Shaman', spec: 'Enhancement', role: 'DPS' },
  { class: 'Shaman', spec: 'Restoration', role: 'Healer' },
  // Warlock
  { class: 'Warlock', spec: 'Affliction', role: 'DPS' },
  { class: 'Warlock', spec: 'Demonology', role: 'DPS' },
  { class: 'Warlock', spec: 'Destruction', role: 'DPS' },
  // Warrior
  { class: 'Warrior', spec: 'Arms', role: 'DPS' },
  { class: 'Warrior', spec: 'Fury', role: 'DPS' },
  { class: 'Warrior', spec: 'Protection', role: 'Tank' },
];

export const classColors: Record<string, string> = {
  'Death Knight': '#C41F3B',
  'Demon Hunter': '#A330C9',
  'Druid': '#FF7D0A',
  'Evoker': '#33937F',
  'Hunter': '#ABD473',
  'Mage': '#69CCF0',
  'Monk': '#00FF96',
  'Paladin': '#F58CBA',
  'Priest': '#FFFFFF',
  'Rogue': '#FFF569',
  'Shaman': '#0070DE',
  'Warlock': '#9482C9',
  'Warrior': '#C79C6E',
};
