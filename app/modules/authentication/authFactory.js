/*
* Local Login Service
*/

(function(){
	'use strict';

	function authFactory($http) {

		function signIn (credentials) {
			return $http.post('/signin', credentials);
		}

		function signUp(credentials) {
			return $http.post('/signup', credentials);	
		}

		function forgotPassword (email) {
			return $http.post('/forgot');
		}
		
		return {
			signIn: signIn,
			signUp: signUp,
			forgot: forgotPassword
		}
		
	}

	angular.module('philosAngularApp').factory('authFactory', ['$http', authFactory]);

})();