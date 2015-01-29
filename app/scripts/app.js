'use strict';

/**
 * @ngdoc overview
 * @name flusterFrontendApp
 * @description
 * # flusterFrontendApp
 *
 * Main module of the application.
 */
angular
    .module('flusterFrontendApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(false)
            .hashPrefix('!');
    });
