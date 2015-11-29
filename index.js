'use strict';
var textr       = require('textr');
var loaderUtils = require('loader-utils');

module.exports = function textrLoader(content, map) {
  // Signal to webpack this is cacheable
  this.cacheable();

  /**
   * Get plugins list from options.
   * This is expected to be an array of the form:
   *
   * textr: [
   *   require('typographic-ellipses'),
   *   require('typographic-single-spaces'),
   *   require('typographic-quotes')
   * ]
   */
  let plugins = this.options.textr;
  if(typeof plugins === 'undefined') {
    plugins = [];
  }

  /**
   * Get any options from the query string.
   * For example, `textr?locale=en-us`
   */
  var query = loaderUtils.parseQuery(this.query);

  // Create textr instance with query opts
  let tf = textr(query);

  // Apply each plugin using `.use`
  plugins.forEach((plugin) => {
    console.log('applying plugin', plugin);
    tf.use(plugin)
  })

  var callback = this.async();
  return callback(null, tf(content));
}
