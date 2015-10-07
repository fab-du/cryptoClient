( function(){
    'use strict';

    angular
        .module('cryptoClient')
        .factory('Auth', ['$http', '$cookieStore', Auth ]);

        function Auth($http, $cookieStore){
            var _self = this;

            _self.accessLevels = routingConfig.accessLevels;
            _self.userRoles = routingConfig.userRoles;
            _self.currentUser = $cookieStore.get('user') || { username:'', role : userRoles.public};

            $cookieStore.remove('user');

            var changeUser = function( user ){
                angular.extend(currentUser, user);
            };

            _self.authorize =  function( accessLevel , role ){
                if(role === undefined) {
                    role = currentUser.role;
                }

                return accessLevel.bitMask & role.bitMask;
            };

            _self.isLoggedIn = function( user, success, error ){
                if(user === undefined) {
                    user = currentUser;
                }
                return user.role.title === userRoles.user.title || user.role.title === userRoles.admin.title;
            };

            _self.register = function(user, success, error) {
                $http.post('/register', user).success(function(res) {
                    changeUser(res);
                    success();
                }).error(error);
            };

            _self.login= function(user, success, error) {
                $http.post('/login', user).success(function(user){
                    changeUser(user);
                    success(user);
                }).error(error);
            };

            _self.logout= function(success, error) {
                $http.post('/logout').success(function(){
                    changeUser({
                        username: '',
                        role: userRoles.public
                    });
                    success();
                }).error(error);
            };

            return _self;
        }

})()
