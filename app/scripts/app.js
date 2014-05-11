'use strict';

angular.module('myApp', [
        'ngTouch',
        'ngRoute',
        'ngAnimate',
        'myApp.controllers',
        'myApp.memoryServices'
  ])
  .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/employees', {templateUrl: 'views/employee-list.html', controller: 'EmployeeListCtrl'});
        $routeProvider.when('/employees/:employeeId', {templateUrl: 'views/employee-detail.html', controller: 'EmployeeDetailCtrl'});
        $routeProvider.when('/employees/:employeeId/reports', {templateUrl: 'views/report-list.html', controller: 'ReportListCtrl'});
        $routeProvider.when('/courses', {templateUrl: 'views/courses.html', controller: 'CourseListCtrl'});
        $routeProvider.otherwise({redirectTo: '/employees'});
  }]);
