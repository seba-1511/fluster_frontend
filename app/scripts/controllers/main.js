'use strict';

/**
 * @ngdoc function
 * @name flusterFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flusterFrontendApp
 */
angular.module('flusterFrontendApp')
    .controller('MainCtrl', function($scope, $location, Server) {
        var loggedIn = false;
        $scope.authorizeDropbox = function() {
            if (loggedIn) {
                return $location.url(Server.URL + 'Cluster');
            }
            $location.url();
        };
    });
