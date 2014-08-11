(function() {
  'use strict';

  function MainController($scope) {

  }

  function configuration($urlRouterProvider, $routeProvider){
    $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'views/main.html'
    })
    .when('/about', {
      controller: 'MainController',
      templateUrl: 'views/about.html'
    })
    
    .otherwise({redirectTo : '/'});
  }

  angular
    .module('philosAngularApp', [
      'ngRoute',
      'ui.router',
      'login'
      ])
    .config(['$urlRouterProvider', '$routeProvider', configuration])
    .controller('MainController', ['$scope', MainController]);

})();



  
