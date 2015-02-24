'use strict';

/**
 * @ngdoc service
 * @name flusterFrontendApp.Server
 * @description
 * # Server
 * Service in the flusterFrontendApp.
 */
angular.module('flusterFrontendApp')
    .service('Server', function() {
        //TODO change this url when we deploy on website
        this.URL = 'https://getfluster.com/';
        // this.URL = 'http://54.67.78.120/';
        this.serverURL = 'https://54.67.78.120/api'
        // this.serverURL = 'http://54.67.78.120:8000'

        this.authorizeURL =
            'https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=bb6pz3atllflo3h&redirect_uri=' +
            this.URL + '&state=cluster';

        this.errorHandler = function(msg) {
            console.log(msg);
        };

    });
