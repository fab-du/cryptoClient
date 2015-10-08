(function(){
    'use strict';

    angular
        .module('cryptoClient')
        .controller('userController', ['$scope', '$log', userController] ) 
        .controller('userControllerDetail', ['$scope', '$log', '$stateParams', userControllerDetail ]);

        function userController( $scope, $log ){
            $scope.users = [
                { firstname : "fabrice", secondname : "dufils"  ,email : "dufils@dufils.com" },
                { firstname : "tux",     secondname : "pengouin",email : "tux@tux.com" },
                { firstname : "linus",   secondname : "torwalds",email : "linux@linux.org" },
                { firstname : "frida",   secondname : "solange" ,email : "fs@cameroun.cm" }
            ];

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
