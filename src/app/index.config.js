(function() {
  'use strict';

  angular
    .module('cryptoClient')
    .config(['$logProvider', 'toastr', '$translateProvider', '$httpProvider', config]);


  /** @ngInject */
  function config( $logProvider, toastr, $translateProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $httpProvider.defaults.useXDomain = true;
     delete $httpProvider.defaults.headers.common['X-Requested-With'];


    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;


    $translateProvider.preferredLanguage('de');
    $translateProvider.useStaticFilesLoader({prefix : 'i18n/', suffix: '.json'});

    $httpProvider.interceptors.push(['$q', '$location', function($q, $location ){
       return {
            'request': function( config ){
                config.headers = config.headers || {};
                return config;
            },
            'responseError': function( response ){
                if( response.status === 401 || response.status === 403 ){
                    $location.path('/');
                }
                else if( response.status === 404 ){
                    $location.path( $location.url() );
                }
                return $q.reject(response);
            }
       };
    }]);

  }


})();
