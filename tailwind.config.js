const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          '2xl': '128px',
        },
      },

      screens: {
        xs: '480px',
      },

      fontFamily: {
        display: ['var(--font-display)', ...defaultTheme.fontFamily.sans],
        body: ['var(--font-body)', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: '#c89d9c',
      },

      keyframes: {
        preloader: {
          from: { opacity: 1 },
          to: { opacity: 0.3 },
        },
      },
    },
  },
  plugins: [],
};
