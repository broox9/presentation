var presApp = angular.module('presApp', ['ngRoute', 'appControllers']);


presApp.config(function ($routeProvider) {

  var tmplOrder =[
    'partials/valueprop.html',
    'partials/nfb.html',
    'partials/targetmarket.html',
    'partials/5forces.html',
    'partials/lean.html',
    'partials/storyboard.html'
  ];

  $routeProvider
    .when('/contents', {
      templateUrl:  'partials/contents.html'
    })
    .when('/slide/:id', {
      templateUrl: function (paramObj) {
        var index = paramObj.id - 1;
        if (typeof tmplOrder[index] == undefined) return '/contents';
        return tmplOrder[index]
      },
      controller: 'SlideBoxCtrl'
    })
    .otherwise({redirectTo: '/contents'});

})
