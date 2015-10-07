(function(){

    'use strict';
    /**
    * @ngdoc function
    * @name cryptoClientApp.controller:I18nCtrl
    * @description
    * # I18nCtrl
    * Controller of the cryptoClientApp
    */
    angular.module('cryptoClient')
    .controller('I18nCtrl', [ '$translate', '$scope' , i18controller]);

    function i18controller( $translate, $scope ){
        $scope.switchLanguage = function (key) {
            var currentkey = $translate.use();
            if ( currentkey !== key ){
                $translate.use( key );
            }
        };
    }

})()

