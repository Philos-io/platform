(function() {
  'use strict';

  function MainController($scope, $rootScope, $document, trainingFactory, $window, CurrentUser) {
    var duration = 500, offset = 10, sessions;
    $scope.session = {};
    //$document.scrollTop(0, duration);

    // set the current user to the Parse.User.current()
    var current = Parse.User.current();
    if(current) {
      $rootScope.currentUser = current.attributes;

      // TODO: Remove this once the user will be able to add his own picture
      $rootScope.currentUser.picture = current.picture || 'images/no_avatar.png';

      // Set the current user constant
      CurrentUser = $rootScope.currentUser;
    }

    // Show the login button only if the current user in undefined!!
    $rootScope.displayLogin = !Parse.User.current();


    if ($window.localStorage && !$window.localStorage.trainings) {
      trainingFactory.getAll().then(function(trainings){
        sessions = $scope.session.all = trainings;
        $window.localStorage.trainings = JSON.stringify(trainings);
      });
    }else{
      sessions = $scope.session.all = JSON.parse($window.localStorage.trainings);
    }

    $scope.goTo = function(el){
      var section = document.getElementById(el);
      var position = angular.element(section);
      $document.scrollToElement(position, offset, duration);
      
    };

    // Managing corporate versus normal trainings
    $scope.corporate = false;
    $scope.toggle = function(corporate){

      if ($scope.corporate === corporate) {
        $scope.corporate = !corporate;
        return;
      }

      $scope.session.all = [];
      sessions.filter(function(session){
        if (session.corporate === corporate) {
          $scope.session.all.push(session);
        }
      });
      //$scope.$apply();
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

      // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

  function toggleState($location, $document, $rootScope){
      return{
        restrict: 'A',
        scope: {
          id: '@toggleState'
        },
        link: function(scope, attrs, el){

          el.$$element.click(function(evt){

            var path  = $location.path();
            
            if (path !== '/') {
              $rootScope.$apply(function() {
                debugger;
                var test = path;

                $location.path(path);
              });
              return;
            }

            var $el = angular.element(el.$$element);

            if ($el.hasClass('active')) return;

            // Remove the active class on every menu!
            angular.element(document.getElementsByClassName('menu')).removeClass('active');

            if (scope.id === "trainings") {
              angular.element(document.getElementById('menuTrainings')).addClass('active');
            }else{
              el.$addClass('active');
            }

            var section = document.getElementById(scope.id);

            if (section) {
              var position = angular.element(section);
              $document.scrollToElement(position, 0, 500);
            }else{
              $location.path('/');
            }
          });
        }
      }
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
    .controller('MainController', [
      '$scope', 
      '$rootScope', 
      '$document', 
      'trainingFactory',
      '$window', 
      'CurrentUser',
      MainController])
    .directive('toggleState',['$location', '$document', '$rootScope', toggleState]);
})();



  
