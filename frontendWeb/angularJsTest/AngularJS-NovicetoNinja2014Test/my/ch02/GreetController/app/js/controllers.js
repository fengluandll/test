'use strict';

/* Controllers */

angular.module('myApp',[]).controller('GreetingController',function ($scope) {
    $scope.now = new Date();
    $scope.greeting = 'Hello';
});