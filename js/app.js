var presApp = angular.module('presApp', ['ngRoute']);


presApp.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/slide', {
      templateUrl: '/partials/valueprop.html'
    })

    .when('/slide2', {
      tempateUrl:  '/partials/nfb.html'
    })
    .when('/', {
      tempateUrl:  '/partials/contents.html'
    })
    .otherwise({
      redirectTo: '/slide'
    })

}])
