const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors:{
        primary: '#ebb745',
        secondary: '#3f3f3f',
        white: '#f1f1f1'
      },
      boxShadow:{
        '3xl': 'rgba(0, 0, 0, 0.4) 0px 30px 90px;',
      },
      textUnderlineOffset: {
        30: '30px',
      },
      zIndex: {
        '1': '1',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
