/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Night sky behind the mountains. 900 is the page and the nearest ridge.
        midnight: {
          900: '#0b0e1c',
          800: '#10142a',
          700: '#161b35',
          600: '#202846',
          500: '#2d3559',
          400: '#434c78',
        },
        // Lifted from the pixel goat logo
        goat: {
          gold: '#FFC20E',
          'gold-dark': '#B5850A',
          horn: '#9C5A3C',
          snout: '#FFA3B1',
          moon: '#FFE7A8',
        },
        accent: {
          purple: '#a78bfa',
          blue: '#7aa2f7',
          gold: '#FFC20E',
        },
        // WoW Class Colors
        'class-warrior': '#C79C6E',
        'class-paladin': '#F58CBA',
        'class-hunter': '#ABD473',
        'class-rogue': '#FFF569',
        'class-priest': '#FFFFFF',
        'class-shaman': '#0070DE',
        'class-mage': '#69CCF0',
        'class-warlock': '#9482C9',
        'class-monk': '#00FF96',
        'class-druid': '#FF7D0A',
        'class-demonhunter': '#A330C9',
        'class-deathknight': '#C41F3B',
        'class-evoker': '#33937F',
      },
      fontFamily: {
        display: ['"Pixelify Sans"', 'monospace'],
        pixel: ['Silkscreen', 'monospace'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
