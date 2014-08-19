(function() {
  'use strict';

  function MainController(CurrentUser, $location, $anchorScroll) {
    
    this.goTo = function(destination){
      $location.hash(destination);
      $anchorScroll();
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
      'authentication',
      'training'
      ])
    .config(['$routeProvider', configuration])
    .controller('MainController', ['CurrentUser','$location','$anchorScroll', MainController]);

})();



  
