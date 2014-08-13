/*
* Login module
*/

(function(){
'use strict';

	function configuration($routeProvider) {
		$routeProvider	
			.when('/login', {
		      	controller: 'AuthController',
				controllerAs: 'auth',
				templateUrl: 'modules/auth/login.html'
		    })
		    .when('/signup', {
		      	controller: 'AuthController',
				controllerAs: 'auth',
				templateUrl: 'modules/auth/signup.html'
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