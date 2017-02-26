(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
      $scope.message = "hello world";
      $scope.tasks = ["Walk the cat", "Feed the cat", "Pet the cat"];

      //if the input is blank (""), don't submit
      //submit if truthy
      $scope.addTask = function(newTask){
        if (newTask) {
          $scope.tasks.push(newTask);
          $scope.newTask = null;
        }
      };

      $scope.completeTask = function(index) {
        $scope.tasks.splice(index, 1);
      };

      window.$scope = $scope;
  });
}());