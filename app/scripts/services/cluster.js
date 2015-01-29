'use strict';

/**
 * @ngdoc service
 * @name flusterFrontendApp.Cluster
 * @description
 * # Cluster
 * Factory in the flusterFrontendApp.
 */
angular.module('flusterFrontendApp')
  .factory('Cluster', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
