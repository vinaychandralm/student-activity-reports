'use strict'
var constantModule = angular.module('constant', []);

constantModule.constant('$theme',{
   "theme":"black"
});

var homeModule = angular.module('studentActivityReports.home', ['constant']);


homeModule.controller('MainCtrl', ['$scope', '$rootScope', '$location','$theme', function($scope, $rootScope, $location,theme) {

    console.dir("Inside MainCtrl");
    console.log(theme.theme);
    $rootScope.isblue = true;

    $scope.teacherId = "12345";
    $scope.extDataArr = ["checkAll", "uncheckAll"];
    $scope.extData = $scope.extDataArr.join(",");
    
    $scope.roles={
        "student":[{"text":"Progress Report"},{"text":"Student Activity Report"}],
        "teacher":[{"text":"Course Completion Report"},{"text":"Student Activity Report"}],
        "admin":[{"text":"Progress Report"},{"text":"Course Completion Report"},{"text":"Student Activity Report"}]
    };
    
    console.log($scope.roles);

    $scope.openForm2 = function() {
        $location.path("/student-activity-reports/A12345");
    };
    $scope.openForm1 = function() {
        $location.path("/teacher-form/A12345");
    };
    $scope.openForm = function() {
        $location.path("/admin-form/A12345");
    };

    $scope.go = function ( path ) {
        $location.path( path );
    };
}]);
