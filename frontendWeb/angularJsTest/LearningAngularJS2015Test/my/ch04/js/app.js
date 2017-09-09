/* chapter1/app.js complete file */
'use strict';
/* App Module */
var helloWorldApp = angular.module('helloWorldApp', [
    'ngRoute',
    'helloWorldControllers'
]);
helloWorldApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }).when('/show', {
            templateUrl: 'partials/show.html',
            controller: 'ShowCtrl'
        });

        $routeProvider.when('/customer', {
            templateUrl: 'partials/customer.html',
            controller: 'CustomerCtrl'
        });

        $routeProvider.when('/addCustomer', {
            templateUrl: 'partials/newCustomer.html',
            controller: 'AddCustomerCtrl'
        });


        $routeProvider.when('/addedCustomer/:customer/:city', {
            templateUrl: 'partials/addedCustomer.html',
            controller: 'AddedCustomerCtrl'
        });


        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);