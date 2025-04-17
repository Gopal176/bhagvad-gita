/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        playfair: ['var(--font-playfair)'],
      },
      colors: {
        saffron: {
          300: '#FFB266',
          400: '#FF9933',
          500: '#CC6600',
        },
        gold: {
          300: '#FFCA28',
          400: '#FFD700',
        },
        dark: {
          bg: '#1A1A1A',
          saffron: '#E68A00',
        },
      },
      backdropBlur: {
        md: '8px',
      },
    },
  },
  plugins: [],
};