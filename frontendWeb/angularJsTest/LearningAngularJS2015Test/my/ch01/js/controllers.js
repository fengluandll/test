"use strict";

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', ['$scope',
    function MainCtrl($scope) {
        $scope.message = "Hello,MainCtrl";
    }
]);

helloWorldControllers.controller("ShowCtrl",['$scope',function ($scope) {
    $scope.message = "show the world";
}]);

