var remoteApp = angular.module('remoteApp', ['firebase']);


remoteApp.controller('RemoteCtrl', ['$scope', '$firebase', function($scope, $firebase) {

  var ref = new Firebase('https://brookespresi.firebaseio.com/');
  var sync = $firebase(ref);

  $scope.commander = function (cmd) {
    var val = {
      command: cmd,
      timestamp: Date.now(),
      initial: false
    };

    ref.update({currentCommand: val})
  }
}]);