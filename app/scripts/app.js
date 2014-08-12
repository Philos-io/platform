(function() {
  'use strict';

  function MainController(CurrentUser) {
    console.log(CurrentUser);
    this.isAuth = function() {
      console.log('test')
      return true;
    }
  }

  function configuration($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'MainController',
        templateUrl: 'views/main.html',
        controllerAs: 'main'
      })
      .otherwise({redirectTo : '/'});
  }

  angular
    .module('philosAngularApp', [
      'ngRoute',
      'login'
      ])
    .config(['$routeProvider', configuration])
    .controller('MainController', ['CurrentUser', MainController]);

})();



  
