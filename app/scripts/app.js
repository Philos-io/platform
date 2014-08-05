'use strict';

angular
  .module('philosAngularApp', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider){
  	$routeProvider
  	.when('/', {
  		controller: 'MainController',
  		templateUrl: 'views/main.html'
  	})
  	.when('/about', {
  		controller: 'MainController',
  		templateUrl: 'views/about.html'
  	})
    .when('/login', {
      controller: 'MainController',
      templateUrl: 'views/login.html'
    });
  });
