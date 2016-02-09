'use strict'

var sarModule = angular.module('studentActivityReports.studentDetails', []);
sarModule.controller('studentDetailsCtrl', ['$scope', '$rootScope','$routeParams', 'getData', 'getEnrollmentStatus', function($scope, $rootScope, $routeParams, getData, getEnrollmentStatus) {

<<<<<<< HEAD
sarModule.controller('studentDetailsCtrl', ['$scope', '$rootScope','$routeParams', 'getData', 'getEnrollmentStatus', function($scope, $rootScope, $routeParams, getData, getEnrollmentStatus) {

=======
>>>>>>> refs/remotes/shuvajit/master
    console.dir("**Inside studentDetailsCtrl**");

    $scope.teacherId = $routeParams.teacherId;
    $scope.details = {};
    console.log("a");
    $rootScope.isblue = false;
    $scope.courseNotSelected=false;
    $scope.enrllNotSelected=false;
    $scope.srtDateNotSelected=false;
    $scope.endDateNotSelected=false;

    /*
    * @startDate: holds the start date.
    * Acceptable date formats: mm-dd-yyyy, mm-dd-yy, ISO formatated string, miliseconds
    */
    $scope.startDate = "04-02-2016";

    /*
    * @endDate: holds the start date.
    * Acceptable date formats: mm-dd-yyyy, mm-dd-yy, ISO formatated string, miliseconds
    */
    $scope.endDate = "04-02-2016";

<<<<<<< HEAD
    $rootScope.isblue = false;

    /*
    * @startDate: holds the start date.
    * Acceptable date formats: mm-dd-yyyy, mm-dd-yy, ISO formatated string, miliseconds
    */
    $scope.startDate = "04-02-2016";

    /*
    * @endDate: holds the start date.
    * Acceptable date formats: mm-dd-yyyy, mm-dd-yy, ISO formatated string, miliseconds
    */
    $scope.endDate = "04-02-2016";

    /*
    * @courseArr: Courses received from server
    * TODO:: modify object structure as per data received.
    */
    $scope.courseArr = [
        {
            id: 0,
            name: "Grade 2 Language Arts"
        },
        {
            id: 1,
            name: "Grade 5 Mathematics"
        },
        {
            id: 2,
            name: "Grade 10 Integrated Math"
        },
        {
            id: 3,
            name: "SINET: Biology A (Flex)"
        }
    ];

    /*
    * @enrollmentArr: Enrollment array
    */
    $scope.enrollmentArr = getEnrollmentStatus.get();
=======
    /*
    * @courseArr: Courses received from server
    * TODO:: modify object structure as per data received.
    */
    $scope.courseArr = [
        {
            id: 0,
            name: "Grade 2 Language Arts"
        },
        {
            id: 1,
            name: "Grade 5 Mathematics"
        },
        {
            id: 2,
            name: "Grade 10 Integrated Math"
        },
        {
            id: 3,
            name: "SINET: Biology A (Flex)"
        }
    ];

    /*
    * @enrollmentArr: Enrollment array
    */
    $scope.enrollmentArr = getEnrollmentStatus.get();
    $scope.submit=function(){
        
    };
>>>>>>> refs/remotes/shuvajit/master

    // Success callback
    var handleSuccess = function(data, status) {
        $scope.details = data;
        console.log(status, $scope.details.courses._get);
    };

    // Error callback
    var handleError = function(err, status) {
        $scope.details = {};
        console.log(status, err);
    };

    getData._get($scope.teacherId).success(handleSuccess).error(handleError);

    $scope.$watch('selectedDate', function() {
        console.log($scope.selectedDate);
    }, true);
<<<<<<< HEAD
=======
    
>>>>>>> refs/remotes/shuvajit/master
}]);
