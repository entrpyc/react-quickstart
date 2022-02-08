const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*{js,jsx}",
  ],
  theme: {
    colors: {
      'custom': '#000',
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
    },
    // spacing: {},
    container: (theme) => ({
      center: true,
      padding: theme("spacing.global.gutter"),
    }),
    extend: {
      spacing: {
        'global': {
          'gutter': '24px',
        },
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.flex-split': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      })
    })
  ],
}