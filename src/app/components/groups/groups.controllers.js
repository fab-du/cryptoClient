( function(){
    'use strict';
    
    angular
        .module('cryptoClient')
        .controller('groupController', [ '$scope', groupController] )

        function groupController( $scope ) {
            
            $scope.groups = [
                { name : 'group1', gv: 'admin' },
                { name : 'group2', gv: 'admin' },
                { name : 'group3', gv: 'admin' },
                { name : 'group4', gv: 'admin' },
                { name : 'group5', gv: 'admin' }
            
            ]
        }

})()
