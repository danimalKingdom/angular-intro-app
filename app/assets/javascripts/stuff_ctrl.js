(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
      $scope.message = "hello world";
      $scope.tasks = [
        {
          text: "Walk the cat",
          importance: 5,
          duration: 20
        }, 
        {
          text: "Feed the cat",
          importance: 4,
          duration: 5
        }, 
        {
          text: "Pet the cat",
          importance: 4,
          duration: 30
        }, 
        {
          text: "Pick up dinner",
          importance: 2,
          duration: 20
        }
      ];

      //if the input is blank (""), don't submit
      //submit if truthy
      $scope.addTask = function(text, importance, duration){
        if (text && importance && duration) {
          var newTask = {
            text: text,
            importance: importance,
            duration: duration
          };
          $scope.tasks.push(newTask);
          $scope.newTaskText = null;
          $scope.newTaskImportance = null;
          $scope.newTaskDuration = null;
          $scope.errorMessage = null;
        } else {
          $scope.errorMessage = "No fields can be blank";
        }
      };

      $scope.completeTask = function(index) {
        $scope.tasks.splice(index, 1);
      };

      $scope.isAboutCat = function(task) {
        //return true if task has word "cat" in it
        return task.indexOf("cat") !== -1;
      };

      window.$scope = $scope;
  });
}());