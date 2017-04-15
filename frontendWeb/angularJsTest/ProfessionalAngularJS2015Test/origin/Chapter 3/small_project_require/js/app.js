var paths = [
  'js/controllers.js',
  'js/services.js',
  'js/directives.js'
];

var requireConfigPaths = {};
for (var i = 0; i < paths.length; ++i) {
  requireConfigPaths[paths[i]] = paths[i];
}

require.config({
  paths: requireConfigPaths
});

require(
  paths,
  function() {
    angular.
      module(
        'foo',
        [
          'foo.controllers',
          'foo.services',
          'foo.directives'
        ]).
      config(function($rootScopeProvider) {
        // Configuration logic goes here
      });

    angular.bootstrap(document, ['foo']);
  });
