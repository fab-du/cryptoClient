(function() {
  'use strict';

  angular
    .module('cryptoClient')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, $translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;

    $translateProvider.preferredLanguage('de');
    $translateProvider.useStaticFilesLoader({prefix : 'i18n/', suffix: '.json'});
  }


})();
