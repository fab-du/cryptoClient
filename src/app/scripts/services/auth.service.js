( function(){
    'use strict';

    angular
        .module('cryptoClient')
        .factory('Auth', ['$http', '$cookieStore', 'routingConfig', Auth ]);

        function Auth($http, $cookieStore, routingConfig){
            var _self = this;

            _self.accessLevels = routingConfig.accessLevels;
            _self.userRoles = routingConfig.userRoles;
            _self.currentUser = $cookieStore.get('user') || { username:'', role : _self.userRoles.public};

            $cookieStore.remove('user');

            var changeUser = function( user ){
                angular.extend(_self.currentUser, user);
            };

            _self.authorize =  function( accessLevel , role ){
                if(role === undefined) {
                    role = _self.currentUser.role;
                }

                return _self.accessLevel.bitMask & _self.role.bitMask;
            };

            _self.isLoggedIn = function( user ){
                if(user === undefined) {
                    user = _self.currentUser;
                }
                return user.role.title === _self.userRoles.user.title || user.role.title === _self.userRoles.admin.title;
            };

            _self.register = function(user, success, error) {
                $http.post('/sign-up', user).success(function(res) {
                    changeUser(res);
                    success();
                }).error(error);
            };

            _self.login= function(user, success, error) {
                $http.post('/sign-in', user).success(function(user){
                    changeUser(user);
                    success(user);
                }).error(error);
            };

            _self.logout= function(success, error) {
                $http.post('/logout').success(function(){
                    changeUser({
                        username: '',
                        role: _self.userRoles.public
                    });
                    success();
                }).error(error);
            };

            return _self;
        }

})();
