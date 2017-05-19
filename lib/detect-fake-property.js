'use strict';

module.exports = function (prefixed, normalized, el) {

  if (normalized == 'borderImage') {
    el.style[prefixed] = 'url(test.png)';
    return Boolean(el.style[prefixed]) ? prefixed : false
  }

  return prefixed;
};