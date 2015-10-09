'use strict';

describe('Controller: I18nCtrl', function () {
  // load the controller's module
  beforeEach(module('cryptoClient'));

  var $scope = {}
  var $translate = {}

it( 'should display german translation list:', inject(function($controller){
    var i18nCtrl = $controller('I18nCtrl', { $translate : $translate, $scope: $scope});
}));

});

