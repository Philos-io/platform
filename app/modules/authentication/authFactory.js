/*
* Local Login Service
*/

(function(){
	'use strict';

	function authFactory($http) {

		function signIn (credentials) {
			console.log(credentials)
			return $http.post('/signup', {credentials: credentials});
		}

		function signUp(credentials) {
			console.log(credentials)
			return $http.post('/signup', {credentials: credentials});	
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