import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bone-white': '#F5F5F0',
        'deep-charcoal': '#121212',
        'terracotta': '#D2691E',
        'earthy-green': '#556B2F',
        'gold': '#D4AF37',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        'sans-alt': ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
