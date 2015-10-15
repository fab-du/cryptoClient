
( function(){
    'use strict';
    
    angular
        .module('cryptoClient')
        .controller('documentController', [ '$scope',  documentController] );

        function documentController( $scope ) {
            $scope.documents = [
                { name : 'doc1', path:'path1', upload_date :'20.10.2000', last_modified : '10.10.2002'},
                { name : 'doc2', path:'path2', upload_date :'01.01.2001', last_modified : '02.04.2005'},
                { name : 'doc3', path:'path3', upload_date :'02.04.2005', last_modified : '05.02.2006'},
                { name : 'doc4', path:'path4', upload_date :'04.04.2010', last_modified : '04.04.2010'},
                { name : 'doc5', path:'path5', upload_date :'01.01.2012', last_modified : '01.01.2012'}
            
            ];
        }

var myApp = angular.module('cryptoClient');

myApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);


myApp.controller('myCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
    
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        var uploadUrl = "/fileUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    
}]);


})();
