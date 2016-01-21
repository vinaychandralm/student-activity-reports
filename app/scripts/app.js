'use strict';

/**
 * @ngdoc overview
 * @name evidateLearnApp
 * @description
 * # evidateLearnApp
 *
 * Main module of the application.
 */

angular
  .module('evidateLearnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/student-activity-reports', {
          templateUrl: 'views/student-activity-reports.html',
          controller: 'StudentDetailsCtrl',
          controllerAs: 'studentdetails'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
