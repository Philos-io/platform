/*
* Local Login Service
*/

(function(){
	'use strict';

	function authFactory($q) {

		// Log in to the app
		function signIn (credentials) {
			//return $http.post('/signin', credentials);
		}

		// Create a new user
		function signUp(userInfo) {
			debugger; 
			var defer = $q.defer();

			var user = new Parse.User();

			// Add username by concatening first and last name
			// Once the use links his twitter account the username should 
			//be his twitter's handle
			user.set('username', userInfo.email);

			// Then add 
			for(var key in userInfo){
				user.set(key, userInfo[key]);
			}

			user.signUp(null, {
			  success: success,
			  error: error
			});

			return defer.promise;


			function success(result) 	{
			  	var user = result.attributes;
			  	user.id = result.id;
			  	
			    defer.resolve(user);
			}

			function error(user, error) {
			    defer.resolve({
			    	user: user,
			    	error: error
			    });
		  	}
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
			forgot: forgotPassword
		}
		
	}

	angular.module('philosAngularApp').factory('authFactory', ['$q', authFactory]);

})();