
( function(){
    'use strict';
    
    angular
        .module('cryptoClient')
        .controller('documentController', [ '$scope', documentController] )

        function documentController( $scope ) {
            $scope.documents = [
                { name : 'doc1', gv: '/path/to/' },
                { name : 'doc2', gv: '/path/to/' },
                { name : 'doc3', gv: '/path/to/' },
                { name : 'doc4', gv: '/path/to/' },
                { name : 'doc5', gv: '/path/to/' }
            
            ]
            
        }

})()
