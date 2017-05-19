'use strict';

const detectFakeProperty = require('./lib/detect-fake-property');

exports = module.exports = prefixStyle;

var el = document.createElement('div');

var prefixes = exports.prefixes = ['', 'Webkit', 'ms', 'Moz', 'O'];

var cache = {};

var prefix = function(vendor, prop) {
  vendor = prefixes.indexOf(vendor) >= 0 ? vendor : '';
  return vendor ? vendor + prop.charAt(0).toUpperCase() + prop.slice(1) : prop;
};

var hasStylePropByVendor = function(vendor, prop) {

  var prefixed = prefix(vendor, prop);

  try {
    let found = typeof el.style[prefixed] !== 'undefined' ? prefixed : false;

    if (found) found = detectFakeProperty(prefixed, prop, el);

    // reduce vendor prefix to the current browser
    if (found && vendor && prefixes.length > 2) {

      for(let i = prefixes.length - 1; i >= 0; --i ) {
        if (!~['', vendor].indexOf(prefixes[i])) {
          prefixes.splice(i, 1);
        }
      }
    }

    return found;
  } catch (er) {
    return false;
  }
};

var normalize = function(prop) {
  let match = /^(Webkit|ms|Moz|O)?(.+)$/.exec(prop);
  if (match && match[2]) {

    let _prop = match[2];
    return _prop.charAt(0).toLowerCase() + _prop.slice(1);
  }
  return '';
};

var styleProp = exports.styleProp = function(prop) {

  if (cache[prop]) return cache[prop];
  if (cache[prop] === false) return; // return undefined instead

  var found;
  var prop_normalized = normalize(prop);

  if (!prop_normalized) return;

  for(var i = 0, len = prefixes.length; i < len; ++i ) {
    found = hasStylePropByVendor(prefixes[i], prop_normalized);
    if (found) {
      cache[prop] = found;
      return cache[prop];
    }
  }
  cache[prop] = false;
  return cache[prop];
};

/**
 *
 * @param {Object} styl
 * @returns {Object}
 */
exports.style = prefixStyle;
function prefixStyle() {

  var styles = Array.prototype.slice.call(arguments);

  var style, i, len;

  style = styles.filter(function(_style) {

    return _style === Object(_style) ? _style : false

  }).reduce(function(pre, curr) {

    var props = Object.keys(curr);
    var prop;
    for(i = 0, len = props.length; i < len; ++i) {
      prop  = styleProp(props[i]);
      if (prop) pre[prop] = curr[props[i]];
    }
    return pre;

  }, {});

  return style;
}