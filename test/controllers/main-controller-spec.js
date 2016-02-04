'use strict';

describe('Controller: src/js/controller/main-ctrl', function() {

    var $rootScope, $scope, $controller;

    beforeEach(module('studentActivityReports.home'));

    beforeEach(inject(function(_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;

        $controller('MainCtrl', {'$rootScope' : $rootScope, '$scope': $scope});
    }));

    it('should check the length of the array', function() {
        expect($scope.teacherArr.length).toEqual(3);
    });
});
