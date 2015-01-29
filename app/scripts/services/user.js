'use strict';

/**
 * @ngdoc service
 * @name flusterFrontendApp.User
 * @description
 * # User
 * Factory in the flusterFrontendApp.
 */
angular.module('flusterFrontendApp')
    .factory('User', function($http) {

        var meaningOfLife = 42;

        // Public API here
        return {
            sendToken: function(token) {
                // TODO: Implement this !
                console.log('Token sent to registration:' + token);
            },
        };
    });
