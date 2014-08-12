(function() {
  'use strict';

  function MainController($scope) {

  }

  function configuration($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'MainController',
        templateUrl: 'views/main.html'
      })
      .otherwise({redirectTo : '/'});
  }

  angular
    .module('philosAngularApp', [
      'ngRoute',
      'login'
      ])
    .config(['$routeProvider', configuration])
    .controller('MainController', ['$scope', MainController]);

})();



  
