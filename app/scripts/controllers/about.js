'use strict';

/**
 * @ngdoc function
 * @name flusterFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flusterFrontendApp
 */
angular.module('flusterFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
