/*
* Login module
*/

(function(){
'use strict';

	function configuration($routeProvider) {
		$routeProvider
		    .when('/signup', {
		      	controller: 'AuthController',
				controllerAs: 'auth',
				templateUrl: 'views/signup.html'
		    })
		    .when('/signin', {
		      	controller: 'AuthController',
				controllerAs: 'auth',
				templateUrl: 'views/signin.html'
		    })
		    .when('/forgot', {
		      	controller: 'AuthController',
				controllerAs: 'auth',
				templateUrl: 'views/forgot.html'
		    });
	}

	angular
		.module('authentication', [])
		.config(['$routeProvider',configuration]);

})();