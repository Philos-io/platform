/*
* Local Login Service
*/

(function(){
	'use strict';

	function authFactory($http) {

		function login (credentials) {
			return $http.post('/login');
		}

		function signup(credentials) {
			return $http.post('/signup');	
		}

		function forgotPassword (email) {
			return $http.post('/forgot');
		}
		
		return {
			login: login,
			signup: signup,
			forgot: forgotPassword
		}
		
	}

	angular.module('philosAngularApp').factory('authFactory', ['$http', authFactory]);

})();