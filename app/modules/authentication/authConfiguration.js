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
				templateUrl: 'modules/authentication/signup.html'
		    })
		    .when('/signin', {
		      	controller: 'AuthController',
				controllerAs: 'auth',
				templateUrl: 'modules/authentication/signin.html'
		    })
		    .when('/forgot', {
		      	controller: 'AuthController',
				controllerAs: 'auth',
				templateUrl: 'modules/authentication/forgot.html'
		    });
	}

	angular
		.module('authentication', [])
		.config(['$routeProvider',configuration]);

})();