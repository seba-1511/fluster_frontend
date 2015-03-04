'use strict';

/**
 * @ngdoc function
 * @name flusterFrontendApp.controller:ClusterCtrl
 * @description
 * # ClusterCtrl
 * Controller of the flusterFrontendApp
 */
angular.module('flusterFrontendApp')
    .controller('ClusterCtrl', function($scope, $location, User, Cluster) {
        var token, parseToken;
        $scope.mainImage = 'images/dropbox.png';
        $scope.description = 'Clean your Dropbox mess';
        $scope.resultTitle = '';
        $scope.files = [];
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

        var receivedDataCallback = function(res) {
            var filesData, clusters, i, curr;
            // $scope.mainImage = 'images/dropbox_done.png';
            // $scope.description = 'Flustering completed !';
            // $scope.resultTitle = 'Here\'s your new home:';
            // $scope.files = res['contents'].map(function(curr, idx) {
            //     return curr['path'];
            // });

            //TODO get the data from Matthew instead of generating it

            filesData = [{
                x: .1,
                y: .2,
                name: 'Example.pdf',
                folder: '/babtou/',
            }, {
                x: .2,
                y: .2,
                name: 'Example.pdf',
                folder: '/babtou2/',
            }, {
                x: .12345,
                y: .12345,
                name: 'Example.pdf',
                folder: '/babtou3/',
            }, {
                x: .22345,
                y: .14757,
                name: 'Example3.pdf',
                folder: '/babtou3/',
            }, {
                x: .14576,
                y: .2456,
                name: 'Example.pdf',
                folder: '/babtou/',
            }, {
                x: .24576,
                y: .2123,
                name: 'Example.pdf',
                folder: '/babtou2/',
            }, {
                x: .121,
                y: .531,
                name: 'Example.pdf',
                folder: '/babtou3/',
            }, {
                x: .532,
                y: .223415,
                name: 'Example3.pdf',
                folder: '/babtou3/',
            }, {
                x: .17689,
                y: .682,
                name: 'Example.pdf',
                folder: '/babtou/',
            }, {
                x: .2356,
                y: .23456,
                name: 'Example.pdf',
                folder: '/babtou2/',
            }, {
                x: .91,
                y: .1346,
                name: 'Example.pdf',
                folder: '/babtou3/',
            }, {
                x: .2123,
                y: .1345,
                name: 'Example3.pdf',
                folder: '/babtou3/',
            }, ];

            clusters = {};
            for (i = 0; i < filesData.length; i++) {
                curr = filesData[i];
                curr.size = 0.5;
                if (!clusters[curr.folder]) {
                    clusters[curr.folder] = {
                        key: curr.folder,
                        values: [],
                    };
                }
                clusters[curr.folder].values.push(curr);
            }

            $scope.filesData = clusters;
        };

        $scope.clusterDropbox = function() {
            if (!$scope.accepted) {
                return $location.path('/');
            }
            $scope.mainImage = 'images/spinner.gif';
            $scope.description =
                'Please wait while Fluster is flustering...';
            Cluster.startClustering(token, receivedDataCallback);
        };

        receivedDataCallback([]); // Replace with $scope.clusterDropbox();
    });