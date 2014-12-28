(function() {
  'use strict';

  function MainController($document, trainingFactory, $window, CurrentUser) {
    var duration = 500, offset = 30, sessions, self = this;
    self.session = {};

    trainingFactory.getAll().then(function(trainings){
      sessions = self.session.all = trainings;
    });

    self.goTo = function(el){
      var section = document.getElementById(el);
      var position = angular.element(section);
      $document.scrollToElement(position, offset, duration);
      
    };

    // Managing corporate versus normal trainings
    self.corporate = false;
    self.toggle = function(corporate){

      if (self.corporate === corporate) {
        self.corporate = !corporate;
        return;
      }

      self.session.all = [];
      sessions.filter(function(session){
        if (session.corporate === corporate) {
          self.session.all.push(session);
        }
      });
    };
  }

  function configuration($routeProvider, $compileProvider){
    $compileProvider.debugInfoEnabled(false);
    $routeProvider
      .when('/', {
        controller: 'MainController',
        templateUrl: 'views/main.html',
        controllerAs:'main'
      })
      .when('/about', {
        controller: 'MainController',
        templateUrl: 'views/about.html',
        controllerAs:'main'
      })
      .when('/team', {
        controller: 'MainController',
        templateUrl: 'views/team.html',
        controllerAs:'main'
      })
      .otherwise({redirectTo : '/'});
  }

  function toggleState($location, $document){
      return{
        restrict: 'A',
        scope: {
          id: '@toggleState'
        },
        link: function(scope, attrs, el){

          var path = $location.path();

          if (path !== '/' && path.substr(1, path.length) === scope.id) {
            angular.element(document.getElementsByClassName('menu')).removeClass('active');

            el.$addClass('active');
          } 
        

          el.$$element.click(function(evt){

            var $el = angular.element(el.$$element);

            if ($el.hasClass('active')) return;

            // Remove the active class on every menu!
            angular.element(document.getElementsByClassName('menu')).removeClass('active');

            el.$addClass('active');
          });
        }
      }
  }

  function scrollTo($location, $document) {
    return function(scope, element, attrs, ctrl){
      element.bind('click', function (e){
        var location = attrs.scrollTo;
        var section = document.getElementById(location);
        var position = angular.element(section);
        $document.scrollToElement(position, 0, 500);
      });
    }
  }

  function run(){
    var keys = {
      js: 'LnV5YM6ZtvYZ7nrI2tx58IN8ABWTb67KgUJADAef',
      appID :'sNUJR4kRaArwjeBtlkdcdSm5cmDYeHidBQIyIYVt',
      server: 'F3JxL62hhpsnYK16oTg0R3A6SUdeQ6SLZmlWgSgQ',
      client: 'GZIN8ZcKwlmcJe4Y8B14a2J17iFasnzQfAw8vZhX'
    };
    Parse.initialize(keys.appID, keys.js);
  }
    
  angular
    .module('philos', [
      'ngRoute',
      'authentication',
      'training',
      'duScroll',
      'profile',
      'cart'
      ])
    .run(run)
    .config(['$routeProvider','$compileProvider', configuration])
    .controller('MainController', [
      '$document', 
      'trainingFactory',
      '$window', 
      'CurrentUser',
      MainController])
    .directive('toggleState',['$location', '$document', toggleState])
    .directive('scrollTo', ['$location', '$anchorScroll', scrollTo]);
})();



  
