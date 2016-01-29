'use strict'

var homeModule = angular.module('studentActivityReports.home', []);

homeModule.controller('MainCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {

    console.log("Inside MainCtrl");

    // $rootScope.page_title = 'About Me';

    $scope.teacherId = "";
    $scope.disableSubmitBtn = true;
    $scope.teacherArr = [
        {"teacher_name": "A. Test Teacher", "teacher_id": "A12345"},
        {"teacher_name": "B. Test Teacher", "teacher_id": "B12345"},
        {"teacher_name": "C. Test Teacher", "teacher_id": "C12345"}
    ];

    $scope.multiselectModel = [];

    $scope.selectOptionsObjects = [
        {
            id: 0,
            name: "All Courses"
        },
        {
            id: 1,
            name: "Grade 2 Language Arts"
        },
        {
            id: 2,
            name: "Grade 5 Mathematics"
        },
        {
            id: 3,
            name: "Grade 10 Integrated Math"
        },
        {
            id: 4,
            name: "SINET: Biology A (Flex)"
        }
    ];



    $scope.multiselectModel2 = [];

    $scope.selectOptionsObjects2 = [
        {
            id: 0,
            name: "All Courses"
        },
        {
            id: 1,
            name: "Grade 2 Language Arts"
        },
        {
            id: 2,
            name: "Grade 5 Mathematics"
        },
        {
            id: 3,
            name: "Grade 10 Integrated Math"
        },
        {
            id: 4,
            name: "SINET: Biology A (Flex)"
        }
    ];



    $scope.selectedTeacher = {"teacher_name": "--Select--"};

    $scope.validateInput = function(val) {

        if($scope.teacherId && $scope.teacherId!=="") {

            $scope.disableSubmitBtn = false;
        } else {
            $scope.disableSubmitBtn = true;
        }
    }

    $scope.studActivityReports = function() {
        console.log("Redirecting to student activity reports page...");
        if($scope.selectedTeacher && $scope.selectedTeacher.teacher_id) {

            $location.path("/student-activity-reports/" + $scope.selectedTeacher.teacher_id);
        }
    }

    $scope.drpDownSelect = function(data) {

        $scope.selectedTeacher = data;
        $scope.disableSubmitBtn = false;
    }

    $scope.$watch('multiselectModel', function() {
        console.log($scope.multiselectModel);
    }, true);

    $scope.$watch('multiselectModel2', function() {
        console.log($scope.multiselectModel2);
    }, true);
}]);
