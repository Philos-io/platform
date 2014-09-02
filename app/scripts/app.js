(function() {
  'use strict';

  function MainController(CurrentUser, $location, $anchorScroll, $rootScope) {
    
    $rootScope.show = true;
    $rootScope.test = function() {
      this.show = false;
      $rootScope.CurrentUser = CurrentUser;
      console.log(this.isConnected, CurrentUser);
    }

    this.goTo = function(destination){
      $location.hash(destination);
      $anchorScroll();
    }
  }

  function configuration($routeProvider, $locationProvider){
    //$locationProvider.html5Mode(true);
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
      'authentication',
      'training'
      ])
    .config(['$routeProvider','$locationProvider', configuration])
    .controller('MainController', ['CurrentUser','$location','$anchorScroll', '$rootScope', MainController]);

})();



  
