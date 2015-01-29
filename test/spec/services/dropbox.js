'use strict';

describe('Service: Dropbox', function () {

  // load the service's module
  beforeEach(module('flusterFrontendApp'));

  // instantiate service
  var Dropbox;
  beforeEach(inject(function (_Dropbox_) {
    Dropbox = _Dropbox_;
  }));

  it('should do something', function () {
    expect(!!Dropbox).toBe(true);
  });

});
