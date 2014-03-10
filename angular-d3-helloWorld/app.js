var app = angular.module('myApp', []);

app.controller('myController', ['$scope', 
  function($scope){
    $scope.myText = "Hello World, #1";
  }
]);

// //Use the following syntax in other files to add functionality to the same module myApp:
// angular.module('myApp')
//   .controller('myController', ['$scope', function($scope){
//     $scope.myText = "Hello World, #1";
//   }]);

app.directive('myDirective', )
