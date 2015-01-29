'use strict';

/**
 * @ngdoc function
 * @name flusterFrontendApp.controller:ClusterCtrl
 * @description
 * # ClusterCtrl
 * Controller of the flusterFrontendApp
 */
angular.module('flusterFrontendApp')
    .controller('ClusterCtrl', function($scope, $location, User) {
        var token, parseToken;

        $scope.accepted = $location.hash()
            .indexOf('error=') == -1;

        parseToken = function(text) {
            return text.substring(
                text.indexOf('access_token=') + 13,
                text.indexOf('&')
            );
        };

        if ($scope.accepted) {
            token = parseToken($location.hash());
            User.sendToken(token);
        }
        $scope.clusterDropbox = function() {
            if (!$scope.accepted) {
                $location.path('/');
            }
            alert('Clustering');
        };
    });
