"use strict";

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', ['$scope',
    function MainCtrl($scope) {
        $scope.message = "Hello World";
    }
]);

helloWorldControllers.controller("ShowCtrl",['$scope',function ($scope) {
    $scope.message = "Show The World";
}]);

helloWorldControllers.controller('CustomerCtrl',['$scope',
function ($scope) {
    $scope.customerName = "Bob's Burgers";
    $scope.customerNumber = '33522';

    $scope.changeCustomer = function () {
        $scope.customerName = $scope.cName;
        $scope.customerNumber = $scope.cNumber;
    };
}]);

helloWorldControllers.controller('AddCustomerCtrl', ['$scope','$location',
    function ($scope,$location) {
        $scope.submit = function () {
          $location.path('/addedCustomer/' + $scope.cName + '/' + $scope.cCity);
        };
    }
]);

helloWorldControllers.controller('AddedCustomerCtrl', ['$scope','$routeParams',
    function ($scope, $routeParams) {
        $scope.customerName = $routeParams.customer;
        console.log('customer: ' + $scope.customerName);
        $scope.customerCity = $routeParams.city;
        console.log('city: ' + $scope.customerCity);
    }
]);


