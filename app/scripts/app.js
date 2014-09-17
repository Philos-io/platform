(function() {
  'use strict';

  function MainController($scope, $rootScope, $document, trainingFactory, $window, CurrentUser) {
    var duration = 500, offset = 10;
    $scope.session = {};
    //$document.scrollTop(0, duration);

    // set the current user to the Parse.User.current()
    var current = Parse.User.current();
    if(current) {
      $rootScope.currentUser = current.attributes;

      // TODO: Remove this once the user will be able to add his own picture
      $rootScope.currentUser.picture = 'images/no_avatar.png';

      // Set the current user constant
      CurrentUser = $rootScope.currentUser;
    }

    // Show the login button only if the current user in undefined!!
    $rootScope.displayLogin = !Parse.User.current();


    if ($window.localStorage && !$window.localStorage.trainings) {
      trainingFactory.getAll().then(function(trainings){
        $scope.session.all = trainings;
        $window.localStorage.trainings = JSON.stringify(trainings);
      });
    }else{
      $scope.session.all = JSON.parse($window.localStorage.trainings);
    }

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
      'profile',
      'cart'
      ])
    .run(function(){
      var keys = {
        js: 'LnV5YM6ZtvYZ7nrI2tx58IN8ABWTb67KgUJADAef',
        appID :'sNUJR4kRaArwjeBtlkdcdSm5cmDYeHidBQIyIYVt',
        server: 'F3JxL62hhpsnYK16oTg0R3A6SUdeQ6SLZmlWgSgQ',
        client: 'GZIN8ZcKwlmcJe4Y8B14a2J17iFasnzQfAw8vZhX'
      };

      Parse.initialize(keys.appID, keys.js);

      
    })
    .config(['$routeProvider','$locationProvider', configuration])
    .controller('MainController', ['$scope', '$rootScope', '$document', 'trainingFactory','$window', 'CurrentUser', MainController]);
})();



  
