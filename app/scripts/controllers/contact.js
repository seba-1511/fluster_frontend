'use strict';

/**
 * @ngdoc function
 * @name flusterFrontendApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the flusterFrontendApp
 */
angular.module('flusterFrontendApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.contacts = [{
    	first: 'Anthony',
    	last: 'Wittemann',
    	email: 'awittema@usc.edu'
    },{
    	first: 'Gabriel',
    	last: 'Pereyra',
    	email: 'asdf@asdf.com'
    },{
    	first: 'Matthew',
    	last: 'O\'Brien',
    	email: 'asdf@asdf.com'
    },{
    	first: 'Sebastien',
    	last: 'Arnold',
    	email: 'asdf@asdf.com'
    }];
  });
