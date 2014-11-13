var appControllers = angular.module('appControllers',[])


appControllers.controller('SlideBoxCtrl', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {


  $scope.keyCommand = function ($event) {
//    console.log("event", $event)
    console.log("$location", parseInt($location.path()))
    console.log("keyCode", $event.keyCode)
  }

}]);
