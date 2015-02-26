'use strict';

describe('Directive: flsrClusterViz', function () {

  // load the directive's module
  beforeEach(module('flusterFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flsr-cluster-viz></flsr-cluster-viz>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the flsrClusterViz directive');
  }));
});
