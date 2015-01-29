'use strict';

/**
 * @ngdoc function
 * @name flusterFrontendApp.controller:ClusterCtrl
 * @description
 * # ClusterCtrl
 * Controller of the flusterFrontendApp
 */
angular.module('flusterFrontendApp')
    .controller('ClusterCtrl', function($scope, $location) {
        $scope.accepted = $location.hash()
            .indexOf('error=') == -1;
        $scope.clusterDropbox = function() {
            if (!$scope.accepted) {
                $location.path('/');
            }
            alert('Clustering');
        };
    });
