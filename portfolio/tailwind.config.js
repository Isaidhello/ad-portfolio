module.exports = {
  purge: {
    mode:'layers',
    content: ['./public/**/*.html', './public/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
