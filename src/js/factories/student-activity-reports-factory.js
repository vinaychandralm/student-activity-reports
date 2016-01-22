'use strict'
var factoryModule = angular.module('studentActivityReports.factories', []);

factoryModule.factory('getData', function($http) {

    var basePath = '/src/js/data/';

    return {
        _get: function(str) {
            return $http.get(basePath + str + '.json');
        }
    };
});
