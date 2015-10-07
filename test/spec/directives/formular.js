'use strict';

describe('Directive: formular', function () {

  // load the directive's module
  beforeEach(module('cryptoClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<formular></formular>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the formular directive');
  }));
});
