const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*{js,jsx}",
  ],
  theme: {
    colors: {
      'custom': '#000',
    },
    fontSize: {
      // [fontSize, lineHeight]
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '3xl': ['32px', {
        letterSpacing: '-0.02em',
        lineHeight: '40px',
      }],
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
    },
    spacing: {
      global: {
        gutter: '24px',
      },
    },
    container: (theme) => ({
      center: true,
      padding: theme("spacing.global.gutter"),
    }),
    screens: {
			xl: { max: "1280px" },
			lg: { max: "1024px" },
			md: { max: "768px" },
			sm: { max: "480px" },
			xs: { max: "320px" },
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
        '.tween': {
          transition: '0.2s all ease-in-out',
        },
      })
    })
  ],
}