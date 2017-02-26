(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
      $scope.message = "hello world";
      $scope.tasks = ["Walk the cat", "Feed the cat", "Pet the cat"];
      window.$scope = $scope;
  });
}());