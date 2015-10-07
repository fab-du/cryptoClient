( function(){
    'use strict';
    
    angular
        .module('cryptoClient')
        .controller('signinController', [ '$scope', signinController ] )

        function signinController( $scope ) {

            $scope.login = function( credentials ){
                console.log( "log in have been clicked ");
            }

        }

})()
