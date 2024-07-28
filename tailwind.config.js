const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.js'],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        blue: '#005e9e',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
    fontFamily: {
      nunito: ['nunito', 'sans-serif'],
      MyFont: ['"My Font"', 'serif'], // Ensure fonts with spaces have " " surrounding it.
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '800px',
        md: '1000px',
        lg: '1200px',
        xl: '1200px',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
