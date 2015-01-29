'use strict';

/**
 * @ngdoc function
 * @name flusterFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flusterFrontendApp
 */
angular.module('flusterFrontendApp')
    .controller('MainCtrl', function($scope, $location, $routeParams, Server) {
        var loggedIn = false,
            state = $location.hash()
            .split('state=')[1];
        if (loggedIn || state == 'cluster') {
            $location.path('/Cluster/');
        }
        $scope.authorizeDropbox = function() {
            window.location.href = Server.authorizeURL;
        };
    });
