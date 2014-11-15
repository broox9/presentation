var presApp = angular.module('presApp', ['ngRoute', 'firebase', 'appControllers']);


presApp.config(function ($routeProvider) {

  var tmplOrder =[
    'partials/contents.html',
    'partials/valueprop.html',
    'partials/storyboard.html',
    'partials/nfb.html',
    'partials/targetmarket.html',
    'partials/5forces.html',
    'partials/lean.html',
    'partials/layout.html',
    'partials/roadmap.html'
  ];

  $routeProvider
    .when('/slide/:id', {
      templateUrl: function (paramObj) {
        var index = parseInt(paramObj.id, 10) - 1;

        if (!tmplOrder[index]) {
          return 'partials/contents.html';
        }
        return tmplOrder[index]
      },
      controller: 'MainCtrl'
    })
    .otherwise({redirectTo: '/slide/1'});

})
