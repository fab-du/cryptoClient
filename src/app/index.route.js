(function() {
  'use strict';

  angular
    .module('cryptoClient')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('home.intro', {
        url: '/',
        templateUrl: 'app/components/intro/intro.html',
      })
      .state('home.users', {
          url: '/users',
          templateUrl: 'app/components/users/users.html',
          controller: 'userController'
      })
      .state('home.documents', {
          url: '/documents',
          templateUrl: 'app/components/documents/documents.html',
          controller: 'documentController'
      })
      .state('home.groups', {
          url: '/goups',
          templateUrl: 'app/components/groups/groups.html',
          controller: 'groupController'
      })
      .state('home.signin', {
          url: '/signin',
          templateUrl: 'app/components/sign-in/sign-in.html',
          controller: 'signinController'
      })
      .state('home.signup', {
          url: '/signup',
          templateUrl: 'app/components/sign-up/sign-up.html',
          controller: 'signupController'
      })

      $urlRouterProvider.otherwise('/');

  }

})();
