// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.md',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#F7F8FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#f6f7f8',

        'primary-dark': '#0D2438',
        'secondary-dark': '#102D44',
        'ternary-dark': '#1E3851',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
    },
  },
  variants: {
    extend: { opacity: ['disabled'] },
  },
  // Por si quiero usar Forms https://github.com/tailwindlabs/tailwindcss-forms
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
};
