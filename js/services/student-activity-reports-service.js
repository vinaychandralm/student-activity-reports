'use strict'
var serviceModule = angular.module('studentActivityReports.services', []);

serviceModule.factory('getData', function($http) {

    var basePath = '/data/';

    return {
        _get: function(str) {
            return $http.get(basePath + str + '.json');
        }
    };
});
