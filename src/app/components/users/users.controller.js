(function(){
    'use strict';

    angular
        .module('cryptoClient')
        .controller('userController', ['$scope', '$log', 'api_http', userController] ) 
        .controller('userControllerDetail', ['$scope', '$log', '$stateParams', userControllerDetail ]);

        function userController( $scope, $log, api_http ){
            $scope.users = { };
            var users = function( err, data ){
                    if( !err ){
                        $scope.users = data.data; 
                    }
                    else{
                        
                    }
            }
               
            api_http.GET('/users', users );

            $scope.remove = function( user, index ){
                    $scope.users.splice( index, 1 );
            };

        }



        function userControllerDetail( $scope , $log, $stateParams ){
            $log.log("userdetailcontroller");
            $scope.detailedUser = $scope.users[ $stateParams.userId ];
            //probably make a request to get more info concerning the user
        }

})()
