/*
* Profile Factory
*/

(function(){
	'use strict';

	function profileFactory($q){

		var defer = $q.defer();

		function getUser(forceRefresh){

			// Get the current user information
			var current = Parse.User.current();

			// If refresh then get data from the cloud
			if(forceRefresh){
				var query = new Parse.Query(Parse.User);
				query.get(current.id, {
					success: success,
					error: error
				});	
			}else{ // else return the current user
				var user = current.attributes;
			  	user.id = current.id;
				defer.resolve(user);
			}

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


		return {
			getUser: getUser
		}
	}

	angular.module('profile').factory('profileFactory', ['$q', profileFactory]);
})();