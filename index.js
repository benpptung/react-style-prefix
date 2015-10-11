'use strict';

var el = document.createElement('div');

var prefixes = ['', 'Webkit', 'ms', 'Moz', 'O'];

var cache = {};

var prefix = function(vendor, prop) {
  vendor = prefixes.indexOf(vendor) >= 0 ? vendor : '';
  return vendor ? vendor + prop.charAt(0).toUpperCase() + prop.slice(1) : prop;
};

var hasStylePropByVendor = function(vendor, prop) {

  var p = prefix(vendor, prop);

  try {
    return typeof el.style[p] !== 'undefined' ? p : false;
  } catch (er) {
    return false;
  }
};

exports.styleProp = function(prop) {

  if (cache[prop] || cache[prop] === false) return cache[prop];

  var p;
  for(var i = 0, len = prefixes.length; i < len; ++i ) {
    p = hasStylePropByVendor(prefixes[i], prop);
    if (p) {
      cache[prop] = p;
      return cache[prop];
    }
  }
  cache[prop] = false;
  return cache[prop];
};

/**
 *
 * @param {Object} styl
 * @param {Array} [plugins]
 * @returns {Object}
 */
exports.style = function() {

  var args = Array.prototype.slice.call(arguments, 0);
  if (args.length == 0 || args[0] !== Object(args[0])) {
    throw new Error('react-style-prefix need at least one react style object, ' +
      'but got zero');
  }

  if (Array.isArray(args[0])) {
    throw  new Error('react-style-prefix need at least one react style object, ' +
      'but got an array');
  }

  var plugins = args.slice(-1)[0];

  if (Array.isArray(plugins)){
    args = args.slice(0, -1);
  }
  else {
    plugins = [];
  }

  var style, i, len;

  style = args.filter(function(styl) {
    return styl === Object(styl) ? styl : false
  }).reduce(function(pre, curr) {
    var props = Object.keys(curr);
    var prop;
    for(i = 0, len = props.length; i < len; ++i) {
      prop  = exports.styleProp(props[i]);
      if (prop) pre[prop] = curr[props[i]];
    }
    return pre;
  }, {});

  for(i = 0, len = plugins.length; i < len; ++i) {
    style = plugins[i](style);
  }

  return style;
};