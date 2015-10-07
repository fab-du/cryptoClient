(function(){
    'use strict';

    angular
        .module('cryptoClient')
        .controller('userController', ['$scope', userController] );

        function userController( $scope ){
            $scope.users = [
                { firstname : "fabrice", secondname : "dufils"    },
                { firstname : "tux", secondname     : "pengouin"  },
                { firstname : "linus", secondname   : "torwalds"  },
                { firstname : "frida", secondname   : "solange"   }
            ]

        }

})()
