'use strict';

var expect = require('expect.js');
var style = require('../index').style;
var fixtures = require('./fixtures/styles');

describe('style()', function() {

  it('should create a new style object', function() {
    var styl = style(fixtures.container);
    expect(styl).not.to.equal(fixtures.container);
  });

  it('can accept only one style object', function() {
    var styl = style(fixtures.container);
    expect(styl).to.eql({
      position: 'relative',
      display: 'block',
      width: '100%',
      boxSizing: 'content-box',
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
    })
  });

  it('can accept multiple style object', function() {
    var styl = style(fixtures.container, fixtures.label, fixtures.input);
    expect(styl).to.eql({
      position: 'absolute',
      display: 'block',
      width: '100%',
      boxSizing: 'content-box',
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      WebkitFontSmoothing: 'antialiased',
      cursor: 'text',
      outlineColor: 'rgba(0, 0, 0, 0)',
      outlineStyle: 'none',
      outlineWidth: 0,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0
    })
  });

  it('can add vendor prefix automatically', function() {
    var styl = style(fixtures.container, fixtures.label, fixtures.input, fixtures.msg);
    expect(styl).to.eql({
      position: 'absolute',
      display: 'block',
      width: '100%',
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      WebkitFontSmoothing: 'antialiased',
      cursor: 'text',
      outlineColor: 'rgba(0, 0, 0, 0)',
      outlineStyle: 'none',
      outlineWidth: 0,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      animation: 'slidein 3s ease-in 1s 2 reverse both paused',
      animationDelay: '3s',
      animationDirection: 'reverse',
      animationDuration: '0.5s',
      animationFillMode: 'both',
      animationIterationCount: '3',
      animationName: '-specific',
      animationPlayState: 'running',
      animationTimingFunction: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
      WebkitAppearance: 'searchfield',
      backfaceVisibility: 'hidden',
      backgroundClip: 'border-box',
      borderImage: 'url(http://www.example.com/bck.png)',
      borderImageSlice: '30%',
      boxSizing: 'border-box',
      boxShadow: '60px -16px teal',
      WebkitColumns: '111px 5',
      transform: 'matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0)',
      transformOrigin: '2px',
      transformStyle: 'preserve-3d',
      transition: 'margin-left 4s',
      transitionDelay: '.3s',
      transitionDuration: '120ms',
      transitionProperty: 'test1, animation4',
      transitionTimingFunction: 'step-end',
      perspective: '20px',
      perspectiveOrigin: 'x-position',
      WebkitUserSelect: 'all'
    });
  });

});