//postcss.config.js

const theme = require('./src/plugins/postCSSTheme.cjs')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  loader: 'postcss-loader',
  plugins: [
    postcssPresetEnv({
      features: {
          "custom-properties": {
              preserve: false,
              variables: {}
          },
          "nesting-rules": true
      }
  }),
    require('postcss-nested'),
    theme({
      colors: {
        c01: '#222',
        c02: '#111'
      },
      groups: {
        G01: ['c01', 'c02']
      }
    })
  ]
}