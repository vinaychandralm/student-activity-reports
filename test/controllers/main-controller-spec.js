'use strict';

xdescribe('Controller: src/js/controller/main-ctrl', function() {

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

describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});

describe("The 'toEqual' matcher", function() {

    it("works for simple literals and variables", function() {
      var a = 12;
      expect(a).not.toEqual(12);
    });

    it("should work for objects", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
      expect(foo).toEqual(bar);
    });
  });
