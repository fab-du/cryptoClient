'use strict';

describe('Controller: I18nCtrl', function () {

  // load the controller's module
  beforeEach(module('cryptoClient'));

  var I18nCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    I18nCtrl = $controller('I18nCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(I18nCtrl.awesomeThings.length).toBe(3);
  });
});
