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
      .state('home.signin', {
          url: '/signin',
          templateUrl: 'app/components/sign-in/sign-in.html',
          controller: 'signinController'
      })
      .state('home.signup', {
          url: '/signup',
          templateUrl: 'app/components/sign-up/sign-up.html',
          controller: 'signupController'
      });


      /*
       *Documents groups
       */
      $stateProvider
      .state('home.documents', {
          url: '/documents',
          templateUrl: 'app/components/documents/documents.html',
          controller: 'documentController'
      });

      /*
       *Users Routes 
       */
      $stateProvider
        .state('home.users',{
          url: '/users',
          templateUrl: 'app/components/users/users.html',
          controller: 'userController'
        })
        .state('home.users.details', {
            url: '/user/:userId',
            templateUrl: 'app/components/users/user.detail.html',
            controller: 'userControllerDetail'
        });

      /*
       *Groups Routes 
       ****/
      $stateProvider
        .state('home.groups', {
          url: '/goups',
          templateUrl: 'app/components/groups/groups.html',
          controller: 'groupController'

        })
        .state('home.groups.details', {
          url: '/goup/:groupId',
          templateUrl: 'app/components/groups/group.detail.html',
          controller: 'groupdetailController'
        })
        .state('home.groups.createGroup', {
            url : '/groups/:groupId',
            templateUrl : 'app/components/groups/group.create.html',
            controller  : 'newgroupController'
        })
        .state('home.groups.findGroup', {
            url : '/groups/:groupId',
            templateUrl : 'app/components/groups/group.search.html',
            controller  : 'findgroupController'
        });

      $urlRouterProvider.otherwise('/');

  }

})();
