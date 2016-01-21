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
