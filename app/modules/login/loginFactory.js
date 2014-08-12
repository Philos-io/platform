/*
* Local Login Service
*/

(function(){
	'use strict';

	function loginFactory($http) {

		function login (credentials) {
			return $http.post('/login');
		}
		
		return {
			login: login
		}
		
	}

	angular.module('philosAngularApp').factory('loginFactory', ['$http', loginFactory]);

})();