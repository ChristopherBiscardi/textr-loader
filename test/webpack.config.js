const path = require('path');

module.exports = {
  target: 'node',
  context: __dirname,
  entry: './entry.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.md$/,
      loaders: ['html', 'markdown', '../']
    }]
  },
  textr: [
    require('typographic-ellipses'),
    require('typographic-single-spaces'),
    require('typographic-quotes')
  ]
}