// Pixel goat sprites, one per WoW: Forever class. Each is a 13x12 grid facing right.
// The body is drawn in the class color; letters are props with fixed colors.
// renderSprite() adds a 1px dark outline, so the final sprite is 15x14.

export const CLASS_HEX: Record<string, string> = {
  warrior: '#C79C6E', paladin: '#F58CBA', hunter: '#ABD473', rogue: '#FFF569', priest: '#FFFFFF',
  shaman: '#0070DE', mage: '#69CCF0', warlock: '#9482C9', druid: '#FF7D0A',
};

const PALETTE: Record<string, string> = {
  h: '#9C5A3C', // horn
  e: '#0b0e1c', // eye
  M: '#b8c0d8', // steel
  D: '#6b7394', // dark steel
  G: '#FFC20E', // gold
  B: '#6fa8dc', // shield blue
  W: '#8a5a2c', // wood
  S: '#e8e0c8', // fletching
  K: '#23273d', // mask
  E: '#f5f5f5', // eye white
  R: '#c0392b', // red
  H: '#FFE7A8', // halo
  T: '#3fd0c9', // totem
  P: '#2b3a8f', // mage hat
  F: '#7CFC5A', // fel fire
  L: '#5fbf4a', // leaf
};

// '#' = body, '.' = empty
const BASE = [
  '.............',
  '.............',
  '.............',
  '.......hh....',
  '........h....',
  '........###..',
  '........#e##.',
  '.#.....####..',
  '.########....',
  '.########....',
  '.#.#...#.#...',
  '.#.#...#.#...',
];

// Overlays: '.' keeps the base pixel, anything else replaces it.
const PROPS: Record<string, string[]> = {
  warrior: [
    '.............',
    '..M..........',
    '..M..........',
    '..M....hh....',
    '.DDD....h....',
    '..W.....MMM..',
    '........M....',
  ],
  paladin: [
    '.............',
    '.............',
    '.............',
    '.......hh....',
    '........G....',
    '........GGG..',
    '........G....',
    '...GGG.......',
    '...GBG.......',
    '....G........',
  ],
  hunter: [
    '.............',
    '.............',
    '.............',
    '.............',
    '.............',
    '...SS........',
    '...WW........',
    '...WW........',
  ],
  rogue: [
    '.............',
    '.............',
    '.............',
    '.............',
    '.............',
    '.............',
    '........KEKK.',
    '.......RRR...',
  ],
  priest: [
    '.............',
    '.......HHH...',
    '......H...H..',
    '.......HHH...',
  ],
  shaman: [
    '............T',
    '............T',
    '............R',
    '............W',
    '............W',
    '............W',
    '............W',
    '............W',
    '............W',
    '............W',
    '............W',
    '............W',
  ],
  mage: [
    '......P......',
    '.......PP....',
    '.......PGP...',
    '......PPPPP..',
  ],
  warlock: [
    '...........F.',
    '..........FFF',
    '...........F.',
    '.............',
    '.............',
    '.............',
    '.........R...',
  ],
  druid: [
    '.............',
    '.............',
    '......L.L....',
    '.......LL....',
    '........L....',
  ],
};

const OUTLINE = '#05070f';
export const SPRITE_W = 15;
export const SPRITE_H = 14;

/** Paths for one sprite, grouped by fill color, in a 15x14 box (outline included). */
export function renderSprite(cls: string | null): { fill: string; d: string }[] {
  const body = (cls && CLASS_HEX[cls]) || '#c9ccd6';
  const grid = BASE.map(r => [...r]);
  // the mage hat and druid antlers replace the horns
  if (cls === 'mage' || cls === 'druid') { grid[3][7] = '.'; grid[3][8] = '.'; grid[4][8] = '.'; }
  (PROPS[cls ?? ''] ?? []).forEach((row, y) =>
    [...row].forEach((ch, x) => { if (ch !== '.') grid[y][x] = ch; }),
  );

  const colorOf = (ch: string) => (ch === '#' ? body : PALETTE[ch]);
  const filled = (x: number, y: number) => grid[y]?.[x] != null && grid[y][x] !== '.';
  const byColor: Record<string, string> = {};
  const add = (fill: string, x: number, y: number) => {
    byColor[fill] = (byColor[fill] ?? '') + `M${x} ${y}h1v1h-1z`;
  };

  for (let y = -1; y <= grid.length; y++) {
    for (let x = -1; x <= grid[0].length; x++) {
      if (filled(x, y)) add(colorOf(grid[y][x]), x + 1, y + 1);
      else if (filled(x - 1, y) || filled(x + 1, y) || filled(x, y - 1) || filled(x, y + 1)) add(OUTLINE, x + 1, y + 1);
    }
  }
  // outline first so it sits underneath
  return Object.entries(byColor)
    .sort(([a], [b]) => (a === OUTLINE ? -1 : b === OUTLINE ? 1 : 0))
    .map(([fill, d]) => ({ fill, d }));
}
