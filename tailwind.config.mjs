/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Midnight expansion theme
        midnight: {
          900: '#0a0a12',
          800: '#12121f',
          700: '#1a1a2e',
          600: '#252542',
          500: '#363659',
          400: '#4a4a70',
        },
        accent: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
          gold: '#fbbf24',
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
        display: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
