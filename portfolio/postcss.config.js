// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-purgecss')({
      content: [
        './public/index.html',
      ],
      defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g)
    }),
  ]
}