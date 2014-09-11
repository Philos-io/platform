(function() {
  'use strict';

  function MainController(CurrentUser, $location, $rootScope, $document, trainingFactory, $firebase) {
    
    var url = 'https://philos.firebaseio.com/Users';

    var ref = new Firebase(url); 

    var sync = $firebase(ref);

    // download the data into a local object
    this.data = sync.$asArray();

    var duration = 500, offset = 10;
    this.session = {};
    //$document.scrollTop(0, duration);

    $rootScope.show = true;
    this.session.all = trainingFactory.getAll();
    $rootScope.test = function() {
      this.show = false;
      $rootScope.CurrentUser = CurrentUser;
      console.log(this.isConnected, CurrentUser);
    };

    this.goTo = function(section){
      var trainings = angular.element(document.getElementById(section));
      $document.scrollToElement(trainings, offset, duration);
    };
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
      'training',
      'duScroll',
      'firebase'
      ])
    .constant('FIREBASE_URL', 'https://PUT-YOUR-FIREBASE-URL-HERE.firebaseio.com/')
    .config(['$routeProvider','$locationProvider', configuration])
    .controller('MainController', ['CurrentUser','$location', '$rootScope', '$document', 'trainingFactory','$firebase', MainController]);

})();



  
