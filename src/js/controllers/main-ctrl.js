'use strict'

var homeModule = angular.module('studentActivityReports.home', []);

homeModule.controller('MainCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {

    console.dir("Inside MainCtrl");

    $rootScope.isblue = true;

    $scope.teacherId = "12345";
    $scope.extDataArr = ["checkAll", "uncheckAll"];
    $scope.extData = $scope.extDataArr.join(",");

    $scope.openForm = function() {
        $location.path("/student-activity-reports/A12345");
    }

    $scope.go = function ( path ) {
        $location.path( path );
    };
}]);
