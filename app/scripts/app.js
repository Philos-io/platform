'use strict';

angular
  .module('philosAngularApp', ['ngRoute'])
  .config(function($routeProvider){
  	$routeProvider
  	.when('/', {
  		controller: 'MainController',
  		templateUrl: 'views/main.html'
  	})
  	.when('/about', {
  		controller: 'MainController',
  		templateUrl: 'views/about.html'
  	});
  });
