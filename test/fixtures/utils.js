'use strict';

/**
 *
 * @param {HTMLElement} elm
 * @param styles
 * @returns {HTMLElement}
 * @public
 */
exports.styling = function(elm, styles){
  var i;
  if (typeof styles.opacity == "number" && typeof elm.style.opacity !== 'string'){
    // for IE
    // cannot use typeof to detect elm.filters
    styles.filter = 'alpha(opacity=' + Math.round(100 * styles.opacity) + ')';
  }
  for(i in styles){
    if(styles.hasOwnProperty(i)) elm.style[i] = styles[i];
  }
  return elm;
};