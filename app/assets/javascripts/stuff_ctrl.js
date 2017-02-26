(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
      $scope.firstTask = "Walk the cat";
      $scope.secondTask = "Feed the cat";
      $scope.thirdTask = "Pet the cat";
      window.$scope = $scope;
  });
}());