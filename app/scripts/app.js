(function() {
  'use strict';

  function MainController($scope, CurrentUser, $location, $rootScope, $document, trainingFactory, $firebase) {
    var duration = 500, offset = 10;
    $scope.session = {};
    //$document.scrollTop(0, duration);

    $rootScope.show = true;

    trainingFactory.getAll().then(function(trainings){
      $scope.session.all = trainings;
    });




    $rootScope.test = function() {
      $scope.show = false;
      $rootScope.CurrentUser = CurrentUser;
      console.log($scope.isConnected, CurrentUser);
    };

    $scope.goTo = function(section){
      var trainings = angular.element(document.getElementById(section));
      $document.scrollToElement(trainings, offset, duration);
    };
  }

  function configuration($routeProvider, $locationProvider){
    //$locationProvider.html5Mode(true);
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
      'ngResource',
      'authentication',
      'training',
      'duScroll',
      'firebase'
      ])
    .constant('FIREBASE_URL', 'https://PUT-YOUR-FIREBASE-URL-HERE.firebaseio.com/')
    .config(['$routeProvider','$locationProvider', configuration])
    .controller('MainController', ['$scope', 'CurrentUser','$location', '$rootScope', '$document', 'trainingFactory','$firebase', MainController]);

})();



  
