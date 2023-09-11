import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    screens: {
      xs: '450px',
      // => @media (min-width: 450px) { ... }
      sm: '575px',
      // => @media (min-width: 576px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '992px',
      // => @media (min-width: 992px) { ... }
      xl: '1200px',
      // => @media (min-width: 1200px) { ... }
      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    fontFamily: {
      primary: ['var(--font-inter)'],
      heading: ['var(--font-playfair)'],
    },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#ffffff',
        black: 'rgba(0, 0, 0, 0.5)',
        dark: '#1C1C1C',
        primary: '#EB0A93',
        yellow: '#E49C2F',
        'body-color': '#EAF2EF',
      },
      animation: { 'spin-slower': 'spin 60s linear infinite' },
      boxShadow: {
        cta: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        'tab-shadow': '0 2px #EB0A93',
      },
      backgroundImage: {
        heroLight: "url('../public/bg-pattern.svg')",
        heroDark: "url('../public/bg-dark.svg')",
        faq: "url('../public/bg.svg')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        custom: '95%',
      },
      gridTemplateColumns: {
        'my-columns': 'auto 1fr',
      },
    },
  },
  plugins: [],
}
export default config
