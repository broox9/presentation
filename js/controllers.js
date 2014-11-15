var appControllers = angular.module('appControllers',[])



appControllers.controller('MainCtrl', ['$scope','$route','$routeParams', function ($scope,  $route, $routeParams) {

  console.log("i'm the main controller")
  var ref = new Firebase('https://brookespresi.firebaseio.com/');
//  var sync = $firebase(ref)
  var last_timestamp = 0;


  ref.child('currentCommand').remove();

  ref.on('child_added', function (snapshot) {
    var cmd = snapshot.val();
    console.log("COMMAND", cmd.command)

    ref.child('currentCommand').remove();

    switch(cmd.command) {
      case "next":
        ref.off('child_added')
        $scope.nextSlide();
        break;
      case "prev":
        ref.off('child_added')
        $scope.prevSlide();
        break;
      case "up":
        $scope.$broadcast('changeCell', 38);
        break;
      case "down":
        $scope.$broadcast('changeCell', 40);
        break;
      case "esc":
        ref.off('child_added')
        $scope.resetPresentation();
        break;
      case "t":
        ref.off('child_added')
        $scope.toggleMenu();
        break;
      default:
    }

  });



  $scope.nextSlide = function () {
    var slide = parseInt($routeParams.id, 10)  + 1;
    $route.updateParams({id: slide});
    $route.reload();
  };

  $scope.prevSlide = function () {
    var slide = parseInt($routeParams.id, 10)  - 1;
    $route.updateParams({id: slide});
    $route.reload();
  }

  $scope.toggleMenu = function () {
    $('footer').toggleClass('show')
  };

  $scope.resetPresentation = function () {
    $route.updateParams({id: 1});
    $route.reload();
  };

  $scope.keyCommand = function ($event) {
    switch ($event.keyCode) {
      case 27:
        $scope.resetPresentation();
        break;
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

 container = document.querySelector('#cell-container') ;
  var cells = container.querySelectorAll('.cell') ;

  var currentIndex = 0;
  var nextIndex = function() {
    var index = currentIndex + 1;
    if (cells[index]) {
      return index;
    }
    return currentIndex;
  }
  var prevIndex = function() {
    var index = currentIndex - 1;
    if (currentIndex > 0) {
      return index;
    }
    return 0;
  }

  $scope.$on('changeCell', function (e, keycode) {
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
