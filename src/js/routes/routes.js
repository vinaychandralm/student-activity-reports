var routingModule = angular.module("studentActivityReports.routing", []);

routingModule.provider('routeInfo', function() {
    return {
        _getRoutingInfo: function() {
            return [
                {
                    route: '/',
                    templateUrl: 'js/partials/home.html',
                    controller: 'MainCtrl',
                },
                {
                    route: '/student-activity-reports/:teacherId',
                    templateUrl: 'js/partials/student-activity-reports.html',
                    controller: 'studentDetailsCtrl'
                },
                {
                    route: '/student-form/:studentId',
                    templateUrl: 'js/partials/student-form.html',
                    controller: 'studentDetailsCtrl1'
                },
                {
                    route: '/admin-form/:adminId',
                    templateUrl: 'js/partials/admin-form.html',
                    controller: 'studentDetailsCtrl2'
                }
            ];
        },
        $get: function() {
            return {
                getRoutingInfo: this._getRoutingInfo
            };
        }
    };
});
