require(
  ['js/services.js'],
  function() {
    angular.
      module('foo.controllers', ['foo.services']).
      controller('FooController', function(fooService) {
        // Use fooService
      });
  });
