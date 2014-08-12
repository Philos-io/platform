/*
* Local Login Service
*/

(function(){
	'use strict';

	function loginFactory($http) {

		var user = {
			name: 'Davy Engone',
			email: 'davy@philos.io',
			token: 'philosIscomingsoon'
		};
		
		// $http.get('url').then(function(user){
		// 	currentUser = user;
		// });
		return {
			login: function() {
				return user;
			}
		}
		
	}

	angular.module('philosAngularApp').factory('loginFactory', ['$http', loginFactory]);

})();