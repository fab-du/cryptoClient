( function(){
    'use strict';
    
    angular
        .module('cryptoClient')
        .controller('signupController', [ '$scope', '$rootScope', '$location', '$window', 'api_http' , '$log', signupController ] )

        function signupController( $scope, $rootScope, $location, $window, api_http, $log ) {
            $scope.credentials = null;

            $scope.register = function( credentials ){

                var callback = function( credentials ){
                    if ( credentials != null ){
                        $location.path('/');
                    }
                    else{
                        $rootScope.error = err;
                    }
                }
                callback( credentials );

                /*
                 * this will be call later when integrating with backend
                 *http_api.PUT( url , credentials, callback );
                 */

                $log.log( credentials )
            };

        }

})()
