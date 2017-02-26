(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
      $scope.message = "Hello World!";
      window.$scope = $scope;
  });
}());