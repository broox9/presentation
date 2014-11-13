var appControllers = angular.module('appControllers',[])


appControllers.controller('MainCtrl', ['$scope','$route','$routeParams', function ($scope,  $route, $routeParams) {

  $scope.nextSlide = function () {
    var slide = parseInt($routeParams.id, 10)  + 1;
    $route.updateParams({id: slide});
  };

  $scope.prevSlide = function () {
    var slide = parseInt($routeParams.id, 10)  - 1;
    $route.updateParams({id: slide});
  }

  $scope.toggleMenu = function () {
    $('footer').toggleClass('show')
  };

  $scope.keyCommand = function ($event) {
    switch ($event.keyCode) {
      case 84:
        $scope.toggleMenu();
        break;
      case 37:
        $scope.prevSlide();
        break;
      case 39:
        $scope.nextSlide();
        break;
      case 38:
      case 40:
        $scope.$broadcast('changeCell', {keycode: $event.keyCode})
        break;

      default:
    }
  }

}]);

appControllers.controller('StoryboardCtrl', ['$scope', function ($scope) {

  $scope.$on('changeCell', function (e, args) {
    console.log("args", args)
  })
}])
