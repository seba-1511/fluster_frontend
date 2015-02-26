'use strict';

/**
 * @ngdoc service
 * @name flusterFrontendApp.Cluster
 * @description
 * # Cluster
 * Factory in the flusterFrontendApp.
 */
angular.module('flusterFrontendApp')
    .factory('Cluster', function($http, Server) {
        var privateVar;
        return {
            startClustering: function(token, callback) {
                var url = Server.serverURL + 'Cluster/' + token;
                $http.get(url)
                    .then(function(response) {
                        callback(response.data);
                    }, Server.errorHandler);
            }
        };
    });
