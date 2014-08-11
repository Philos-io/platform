/*
* Local Login Service
*/

(function(){
	'use strict';

	function loginService($http) {

		var user = {
			name: 'Davy Engone',
			email: 'davy@philos.io',
			token: 'philosIscomingsoon'
		}
		return  user;
		
		// $http.get('url').then(function(user){
		// 	currentUser = user;
		// });
	}

	angular.module('philosAngularApp').service('loginService', loginService);

});