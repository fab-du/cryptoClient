(function() {
  'use strict';

  angular
    .module('cryptoClient')
    .run(['$rootScope', '$state', '$log', runBlock]);

  /** @ngInject */
  function runBlock( $rootScope, $state, $log) {

    $rootScope.$on('$stateChangeStart', function( event, toState, toParams, fromState, fromParams ){
        /*
         *if( 'data' in toState || ('access' in toState.data) ){
         *    $rootScope.error = "Acces undefined for this State";
         *    event.preventDefault();
         *}
         */

    })

    $log.debug('runBlock end');
  }

})();
