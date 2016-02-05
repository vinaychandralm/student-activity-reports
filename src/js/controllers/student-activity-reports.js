'use strict'
var sarModule = angular.module('studentActivityReports.studentDetails', []);

sarModule.controller('studentDetailsCtrl', ['$scope','$routeParams', 'getData', function($scope, $routeParams, getData) {

    console.log("Inside studentDetailsCtrl");

    $scope.teacherId = $routeParams.teacherId;
    // console.log($scope.teacherId);
    $scope.details = {};

    $scope.example3settings = {displayProp: 'label', idProp: 'label'};
    $scope.example1model = [];

    var handleSuccess = function(data, status) {
        $scope.details = data;
        console.log(status, $scope.details.courses._get);
    };

    var handleError = function(err, status) {
        $scope.details = {};
        console.log(status, err);
    };

    getData._get($scope.teacherId).success(handleSuccess).error(handleError);

    $(".date-picker").datepicker();

    $(".date-picker").on("change", function () {
        var id = $(this).attr("id");
        var val = $("label[for='" + id + "']").text();
        $("#msg").text(val + " changed");
    });
}]);
