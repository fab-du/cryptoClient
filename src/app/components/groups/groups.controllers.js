( function(){
    'use strict';
    
    angular
        .module('cryptoClient')
        .controller('groupController', [ '$scope', '$log', groupController] )
        .controller('dropdownController',  [ '$scope', dropdownController ] )
        .controller('newgroupController',  [ '$scope', '$log','$stateParams', newgroupController ] )
        .controller('findgroupController', [ '$scope', '$log','$stateParams', findgroupController ] )
        .controller('groupdetailController', [ '$scope', '$log','$stateParams', groupdetailController ] )
        .directive('cryptdropdown', ['$parse', dropdownDirective ]);

        function groupController( $scope, $log ) {//{{{
            $scope.groups = [
                { name : 'group1', gv: 'admin', created_at:'10.10.2010'},
                { name : 'group2', gv: 'admin', created_at:'10.10.2010'},
                { name : 'group3', gv: 'admin', created_at:'10.10.2010'},
                { name : 'group4', gv: 'admin', created_at:'10.10.2010'},
                { name : 'group5', gv: 'admin', created_at:'10.10.2010'}
            ]

            $scope.remove = function( group,  index ){
                $log.log( group );
                $scope.groups.splice( index , 1 );
            }


            $scope.toggleDropdown = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.status.isopen = !$scope.status.isopen;
            };
            $scope.status = {
                isopen: false
            };

            $scope.toggled = function(open) {
                $log.log('Dropdown is now: ', open);
            };
        }//}}}
        function dropdownController( $scope ){//{{{
            $scope.model = '';
                $scope.colors = ['Mustard', 'Ketchup', 'Relish'];
                $scope.repeater = [
                { title: 'one' },
                { title: 'two' },
                { title: 'three' }
                ];
                $scope.selectWithOptionsIsVisible = true;

        }//}}}
         function dropdownDirective( $parse ){//{{{
            return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.selectpicker($parse(attrs.selectpicker)());
                element.selectpicker('refresh');
                
                scope.$watch(attrs.ngModel, function (newVal, oldVal) {
                scope.$parent[attrs.ngModel] = newVal;
                scope.$evalAsync(function () {
                    if (!attrs.ngOptions || /track by/.test(attrs.ngOptions)) element.val(newVal);
                    element.selectpicker('refresh');
                });
                });
                
                scope.$on('$destroy', function () {
                scope.$evalAsync(function () {
                    element.selectpicker('destroy');
                });
                });
            }
            };
         }//}}}
         function newgroupController( $scope, $log, $stateParams ){//{{{
             $log.log("here sind wir in new group controller");
         }//}}}
         function findgroupController( $scope, $log, $stateParams ){//{{{
             $log.log("here sind wir in find group controller");
         }//}}}
            function groupdetailController( $scope, $log, $stateParams ){
                $scope.detailedGroup = $scope.groups[ $stateParams.groupId ];
                $log.log ( $scope.detailedGroup );
            }


})()
