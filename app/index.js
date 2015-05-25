'use strict';

var videoApp = angular.module('VideoApp', []);

videoApp.controller('VideoCtrl', ['$scope', '$sce', function($scope, $sce) {
  $scope.youtubeVideo = function() {

    function getId(src) {
      return src.match(/[^=]+$/)[0];
    }
    var id = getId($scope.video);
    if (id) {
      $scope.videoHtml = 
        $sce.trustAsHtml(
          '<iframe width="420" height="315" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen></iframe>'
        );
    }
  };
}]);
