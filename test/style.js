'use strict';

const expect = require('expect.js');
const prefix = require('../index');
const prefixes = require('../index').prefixes;
const fixtures = require('./fixtures/styles');
const styling = require('./fixtures/utils').styling;


describe('style()', function() {

  it('skip vendor prefixes not exist in the current browser', function() {

    expect(prefixes).to.have.length(5);
    var styl = prefix(fixtures.container, fixtures.label, fixtures.input, fixtures.msg);
    expect(prefixes).to.have.length(2);

  });

  it('should create a new style object', function() {
    var styl = prefix(fixtures.container);
    expect(styl).not.to.equal(fixtures.container);
  });

  it('can accept only one style object', function() {
    var styl = prefix(fixtures.container);
    expect(styl).to.eql({
      position: 'relative',
      display: 'block',
      width: '100%',
      boxSizing: 'content-box',
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
    })
  });

  it('can accept multiple style object', function() {
    var styl = prefix(fixtures.container, fixtures.label, fixtures.input);
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

    var styl = prefix(fixtures.container, fixtures.label, fixtures.input, fixtures.msg);

    var el = document.createElement('div');

    styling(el, styl);

    Object.keys(styl).forEach(prop=> {

      expect(el.style[prop]).to.be.ok();

      // see result in console
      /*try {
        expect(el.style[prop]).to.be.ok();
        console.log('correct prop [' + prop + ']: expect ' + el.style[prop] + ' to be ' + styl[prop])

      } catch (er) {
        console.error('error prop [' + prop + ']: expect ' + el.style[prop] + ' to be ' + styl[prop]);
        console.warn('typeof prop\'s value is ' + typeof el.style[prop]);
      }*/

    });
  });

  it('change other browser\'s vendor prefix to the current one', function() {

    var vendors = ['Webkit', 'ms', 'Moz', 'O'];
    var vendor = prefixes[1];
    vendors.splice( vendors.indexOf(vendor) , 1);
    var other = vendors[0];


    var _styl = Object.assign(fixtures.container, fixtures.label, fixtures.input, fixtures.msg);
    var styl = {};

    // only if we want to see result on console
    /*Object.keys(_styl).forEach(prop=> {
      styl[other + prop] = _styl[prop];

      console.warn('fake prop:[' + other + prop + ']');
    });*/

    styl = prefix(styl);
    var el = document.createElement('div');
    styling(el, styl);

    Object.keys(styl).forEach(prop=> {

      expect(el.style[prop].to.be.ok());

      // only if we want to see result on console
      /*try {
        expect(el.style[prop]).to.be.ok();
        console.log('correct prop [' + prop + ']: expect ' + el.style[prop] + ' to be ' + styl[prop])

      } catch (er) {
        console.error('error prop [' + prop + ']: expect ' + el.style[prop] + ' to be ' + styl[prop]);
        console.warn('typeof prop\'s value is ' + typeof el.style[prop]);
      }*/
    })

  });

  it('remove non-exist property', function() {

    var styl = {
      padding: '100px',
      font: '14px "Lucida Grande", Helvetica, Arial, sans-serif',
      typoErrorProp: ''
    };

    styl = prefix(styl);
    expect(styl).to.eql({padding: '100px',
      font: '14px "Lucida Grande", Helvetica, Arial, sans-serif'});

  });
});