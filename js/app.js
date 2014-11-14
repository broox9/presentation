var presApp = angular.module('presApp', ['ngRoute', 'appControllers']);


presApp.config(function ($routeProvider) {

  var tmplOrder =[
    'partials/contents.html',
    'partials/valueprop.html',
    'partials/nfb.html',
    'partials/targetmarket.html',
    'partials/5forces.html',
    'partials/lean.html',
    'partials/storyboard.html'
  ];

  $routeProvider
    .when('/slide/:id', {
      templateUrl: function (paramObj) {
        var index = parseInt(paramObj.id, 10) - 1;
        console.log(index, tmplOrder[index])
        if (!tmplOrder[index]) {
          return 'partials/contents.html';
        }
        return tmplOrder[index]
      },
      controller: 'MainCtrl'
    })
    .otherwise({redirectTo: '/slide/1'});

})
