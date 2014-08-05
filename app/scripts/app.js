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
      controller: 'LoginController',
      templateUrl: 'views/login.html'
    })
    .when('/register', {
      controller: 'RegisterController',
      templateUrl: 'views/register.html'
    })
    .when('/workshops', {
      controller: 'WorkshopsController',
      templateUrl: 'views/workshops.html'
    });
  });
