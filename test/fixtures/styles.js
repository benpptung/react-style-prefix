'use strict';

exports.container = {
    position: 'relative',
    display: 'block',
    width: '100%',
    boxSizing: 'content-box',

    // stick on a font-familly first
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
  };




exports.label = {
    position: 'absolute',
    display: 'block',
    width: '100%',
    // stick on a font-familly first
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSmoothing: 'antialiased',
    cursor: 'text'
  };




exports.input = {
    width: '100%',
    display: 'block',
    outlineColor: 'rgba(0, 0, 0, 0)',
    outlineStyle: 'none',
    outlineWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  };

exports.message = {
    overflow: 'hidden',
    position: 'relative',
    display: 'block',
    width: '100%'
  };

exports.msg = {
    position: 'absolute',
    display: 'block',
    width: '100%',
    // stick on a font-familly first
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    animation: 'slidein 3s ease-in 1s 2 reverse both paused',
    animationDelay: '3s',
    animationDirection: 'reverse',
    animationDuration: '0.5s',
    animationFillMode: 'both',
    animationIterationCount: '3',
    animationName: '-specific',
    animationPlayState: 'running',
    animationTimingFunction: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
    appearance: 'searchfield',
    backfaceVisibility: 'hidden',
    backgroundClip: 'border-box',
    borderColor: 'orange',
    borderStyle: 'solid',
    borderWidth: '15px 15px 15px 15px',
    borderImage: 'url(https://www.w3schools.com/jsref/border.png) 30 30 round',
    borderImageSlice: '30%',
    boxSizing: 'border-box',
    boxShadow: '60px -16px teal',
    contentColumns: '100px 3',
    columns: '111px 5',
    transform: 'matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0)',
    transformOrigin: '2px',
    transformStyle: 'preserve-3d',
    transition: 'margin-left 4s',
    transitionDelay: '.3s',
    transitionDuration: '120ms',
    transitionProperty: 'test1, animation4',
    transitionTimingFunction: 'step-end',
    perspective: '20px',
    perspectiveOrigin: '10% 10%',
    userSelect: 'all'
  };
