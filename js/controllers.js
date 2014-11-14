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
        $scope.$broadcast('changeCell', $event.keyCode)
        break;

      default:
    }
  }

}]);

appControllers.controller('StoryboardCtrl', function ($scope) {

  window.brx = container = document.querySelector('#cell-container') ;
  var cells = container.querySelectorAll('.cell') ;
  console.log("el", container);
  console.log("cells", cells.length)
  var currentIndex = 0;
  var nextIndex = function() {
    var index = currentIndex + 1;
    if (cells[index]) {
      return index;
    }
    return 0;
  }
  var prevIndex = function() {
    var index = currentIndex - 1;
    if (currentIndex > 0) {
      return index;
    }
    return 0;
  }

  $scope.$on('changeCell', function (e, keycode) {
    console.log("keycode", keycode, currentIndex)
    var newIndex;
    if (keycode === 40) {
      newIndex = nextIndex()
    } else if (keycode === 38) {
      newIndex = prevIndex()
    }

    cells[newIndex].scrollIntoView(true)
    currentIndex = newIndex;

  })
})
