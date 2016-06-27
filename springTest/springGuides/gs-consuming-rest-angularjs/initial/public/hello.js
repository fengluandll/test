/**
 * Created by Allbts-IT on 27/06/2016.
 */
'use strict';

function Hello($scope,$http) {
    $http.get('http://rest-service.guides.spring.io/greeting')
        .success(function (data) {
            $scope.greeting = data;
        })
}