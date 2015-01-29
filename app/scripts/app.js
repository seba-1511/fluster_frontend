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
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/Cluster', {
                templateUrl: 'views/cluster.html',
                controller: 'ClusterCtrl'
            })
            .when('/Contact', {
              templateUrl: 'views/contact.html',
              controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true)
            .hashPrefix('!');
    });
