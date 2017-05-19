module.exports = [

  {
    name: 'tests',
    nature: 'js',
    files: [
      'core-js/modules/es6.object.assign',
      'test/style.js'
    ],
    watch: 'index.js, test/**/*.*, lib/**/*.* ',
    commonjs: true
  }

];