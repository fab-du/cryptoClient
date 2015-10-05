(function() {
  'use strict';

  angular
    .module('cryptoClient')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
