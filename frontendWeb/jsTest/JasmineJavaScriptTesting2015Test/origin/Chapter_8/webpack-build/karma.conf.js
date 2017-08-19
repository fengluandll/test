module.exports = function(config) {
  config.set({
    basePath: '.',

    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],

    files: [
      // shim to workaroud PhantomJS 1.x lack of `bind` support
      // see: https://github.com/ariya/phantomjs/issues/10522
      'node_modules/es5-shim/es5-shim.js',
      'lib/jquery.js',
      'lib/jasmine-jquery.js',
      'lib/mock-ajax.js',
      'spec/SpecHelper.js',
      'spec/**/*Spec.*',
      { pattern: 'src/**/*', watched: true, included: false }
    ],

    preprocessors: {
      'spec/**/*Spec.*': ['webpack']
    },

    webpack: require('./webpack.config.js'),
    webpackServer: { noInfo: true },
    singleRun: true
  });
};
