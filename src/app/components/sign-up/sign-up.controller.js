( function(){
    'use strict';
    
    angular
        .module('cryptoClient')
        .controller('signupController', [ '$scope', signupController ] )

        function signupController( $scope ) {

            $scope.register = function( credentials ){
                console.log( "log in have been clicked ");
            }

        }

})()
