# Textr for Webpack

[textr](https://github.com/shuvalov-anton/textr) loader for
[webpack](https://webpack.github.io/) to make typography better
through [plugins](https://www.npmjs.com/browse/keyword/textr)

Use to pre-process on plain text or Markdown.

Check out the possible
[plugins](https://www.npmjs.com/browse/keyword/textr) to get a feel
for what you can do.

A possible webpack configuration could be:

```
module.exports = {
  module: {
    loaders: [{
      test: /\.md$/,
      loaders: ['html', 'markdown', 'textr']
    }]
  },
  textr: [
    require('typographic-ellipses'),
    require('typographic-single-spaces'),
    require('typographic-quotes')
  ]
}
```
