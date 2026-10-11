// WoW: Forever (Classic+) interest survey results — anonymized
export type ClassicClass =
  | 'warrior'
  | 'paladin'
  | 'hunter'
  | 'rogue'
  | 'priest'
  | 'shaman'
  | 'mage'
  | 'warlock'
  | 'druid';

export type ServerType = 'PVE' | 'PVP' | 'RP';
export type FactionPref = 'Alliance' | 'Horde' | 'Either';
export type ClassicRole = 'Tank' | 'Healer' | 'DPS';

export interface ForeverResponse {
  serverTypes: ServerType[];
  faction: FactionPref;
  classes: ClassicClass[];
  roles: ClassicRole[];
}

// One entry per survey response (names omitted)
export const foreverResponses: ForeverResponse[] = [
  { serverTypes: ['PVP'], faction: 'Alliance', classes: ['druid'], roles: ['Healer', 'DPS'] },
  { serverTypes: ['PVE', 'PVP', 'RP'], faction: 'Either', classes: ['druid'], roles: ['Tank'] },
  { serverTypes: ['PVE'], faction: 'Either', classes: ['druid'], roles: ['DPS'] },
  { serverTypes: ['PVE'], faction: 'Either', classes: ['druid', 'hunter', 'mage', 'paladin', 'priest', 'rogue', 'shaman', 'warlock', 'warrior'], roles: ['Tank', 'Healer', 'DPS'] },
  { serverTypes: ['PVE'], faction: 'Either', classes: ['druid', 'hunter', 'rogue', 'warlock'], roles: ['DPS'] },
  { serverTypes: ['PVE', 'PVP'], faction: 'Either', classes: ['druid', 'mage', 'priest', 'rogue', 'shaman', 'warlock'], roles: ['Healer', 'DPS'] },
  { serverTypes: ['PVE', 'RP'], faction: 'Alliance', classes: ['druid', 'mage', 'priest', 'warlock'], roles: ['DPS'] },
  { serverTypes: ['PVE'], faction: 'Either', classes: ['hunter', 'priest', 'shaman'], roles: ['Healer', 'DPS'] },
  { serverTypes: ['PVP'], faction: 'Horde', classes: ['hunter', 'shaman', 'warrior'], roles: ['Healer', 'DPS'] },
  { serverTypes: ['PVE'], faction: 'Either', classes: ['mage', 'paladin', 'warlock'], roles: ['Healer', 'DPS'] },
  { serverTypes: ['PVE', 'PVP'], faction: 'Either', classes: ['mage', 'rogue'], roles: ['Tank', 'DPS'] },
  { serverTypes: ['PVE', 'PVP', 'RP'], faction: 'Horde', classes: ['paladin'], roles: ['Tank', 'Healer', 'DPS'] },
  { serverTypes: ['PVE', 'PVP'], faction: 'Either', classes: ['paladin', 'priest'], roles: ['Tank', 'Healer', 'DPS'] },
  { serverTypes: ['PVE', 'RP'], faction: 'Either', classes: ['paladin', 'priest', 'shaman'], roles: ['Tank', 'Healer', 'DPS'] },
  { serverTypes: ['PVE'], faction: 'Either', classes: ['paladin', 'priest', 'shaman'], roles: ['Tank', 'DPS'] },
  { serverTypes: ['PVE'], faction: 'Either', classes: ['priest', 'rogue'], roles: ['Healer', 'DPS'] },
  { serverTypes: ['PVE', 'PVP'], faction: 'Either', classes: ['shaman'], roles: ['Healer', 'DPS'] },
  { serverTypes: ['PVE', 'PVP'], faction: 'Horde', classes: ['shaman'], roles: ['Healer', 'DPS'] },
  { serverTypes: ['PVE'], faction: 'Horde', classes: ['shaman'], roles: ['DPS'] },
  { serverTypes: ['PVE'], faction: 'Horde', classes: ['warrior'], roles: ['Tank'] },
  { serverTypes: ['PVE'], faction: 'Horde', classes: ['rogue', 'warrior'], roles: ['DPS'] },
  { serverTypes: ['PVE'], faction: 'Alliance', classes: ['hunter', 'warrior'], roles: ['Tank', 'DPS'] },
];

// Aggregated counts derived from the responses
function countBy<T extends string>(values: T[]): Record<string, number> {
  return values.reduce<Record<string, number>>((acc, v) => {
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, {});
}

export const classInterest = countBy(foreverResponses.flatMap(r => r.classes));
export const roleInterest = countBy(foreverResponses.flatMap(r => r.roles));
export const serverTypeInterest = countBy(foreverResponses.flatMap(r => r.serverTypes));
export const factionInterest = countBy(foreverResponses.map(r => r.faction));
export const totalResponses = foreverResponses.length;
