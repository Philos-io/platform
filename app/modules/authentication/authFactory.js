/*
* Local Login Service
*/

(function(){
	'use strict';

	function authFactory($q) {

		// our factory use defer by default
		var defer = $q.defer();
		
		// Log in to the app
		function signIn (info) {
			Parse.User.logIn(info.email, info.password, {
				success: success,
				error: error
			});
			return defer.promise;
		}

		// Create a new user
		function signUp(userInfo) {
			var user = new Parse.User();

			// Add username by concatening first and last name
			// Once the use links his twitter account the username should 
			//be his twitter's handle
			user.set('username', userInfo.email);

			// Then add all the fields
			for(var key in userInfo){
				user.set(key, userInfo[key]);
			}

			user.signUp(null, {
			  success: success,
			  error: error
			});

			return defer.promise;
		}

		// Private success handler
		function success(result) 	{
		  	var user = result.attributes;
		  	user.id = result.id;
		  	
		    defer.resolve(user);
		}

		// Private error handler
		function error(user, error) {
		    defer.resolve({
		    	user: user,
		    	error: error
		    });
	  	}

		// Login out of the app
		function logout(){
			Parse.User.logOut();
		}

		function forgotPassword (email) {
			//return $http.post('/forgot');
		}
		
		return {
			signIn: signIn,
			signUp: signUp,
			logout: logout,
			forgot: forgotPassword
		}}

	angular.module('authentication').factory('authFactory', ['$q', authFactory]);

})();