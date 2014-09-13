/*
* Login module
*/

(function(){
'use strict';

	function configuration($routeProvider) {
		$routeProvider
		    .when('/signup', {
		      	controller: 'AuthController',
				templateUrl: 'views/signup.html'
		    })
		    .when('/signin', {
		      	controller: 'AuthController',
				templateUrl: 'views/signin.html'
		    })
		    .when('/forgot', {
		      	controller: 'AuthController',
				templateUrl: 'views/forgot.html'
		    });
	}

	angular
		.module('authentication', [])
		.config(['$routeProvider',configuration]);

})();