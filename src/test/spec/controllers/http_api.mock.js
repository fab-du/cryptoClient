 'use strict';

 describe('Service: Http Api',function(){
    beforeEach(module('stateMock'));

     beforeEach( angular.mock.module('cryptoClient'));
     var apihttp;
     var $http;
     var state;

beforeEach(inject(function ($state ) {
    state = $state;
}));



  it("should do something", inject(function ( _api_http_, $httpBackend ) {
      apihttp = _api_http_;  
      var $scope = {};
      state.expectTransitionTo("home");



      apihttp.GET("home.users", function( status , data ){
          $scope.status = status;
          $scope.data = data;
          console.log(data);
      });

    $httpBackend.whenGET("hom.users").respond({ foo: 'bar' });

    $httpBackend.expectGET( "home.users");
    expect( $scope.data ).toEqual( { foo : 'bar'} );




 }));


     /* End of describe */
 });
