var presApp = angular.module('presApp', ['ngRoute']);


presApp.config(function ($routeProvider) {

  var tmplOrder =[
    'partials/valueprop.html',
    'partials/nfb.html',
    'partials/market.html',
    'partials/5forces.html',
    'partials/lean.html',
    'partials/valueprop.html'
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
      }
    })
    .otherwise({
      redirectTo: '/contents'
    })

})
