(function() {
  'use strict';

  angular
    .module('cryptoClient')
    .run(['$log', '$rootScope', runBlock]);

  /** @ngInject */
  function runBlock( $log, $rootScope ) {

    $rootScope.$on('$stateChangeStart', function( event ){
        $log.log( event );
        /*
         *if( 'data' in toState || ('access' in toState.data) ){
         *    $rootScope.error = "Acces undefined for this State";
         *    event.preventDefault();
         *}
         */

    });

    $log.debug('runBlock end');
  }

})();
