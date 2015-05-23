'use strict';

var videoApp = angular.module('VideoApp', []);

videoApp.controller('VideoCtrl', ['$scope', function($scope) {
  $scope.echo = function() {
    alert($scope.video);
  };
}]);
