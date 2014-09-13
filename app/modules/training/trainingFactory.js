/*
* Training Factory
*/

(function(){
	'use strict';


	/*
	*  TrainingFactory constructor
	*/
	function trainingFactory($resource, $q) {

		/*
		* Get all the training sessions!!
		*/
		var keys = {
			js: 'LnV5YM6ZtvYZ7nrI2tx58IN8ABWTb67KgUJADAef',
			appID :'sNUJR4kRaArwjeBtlkdcdSm5cmDYeHidBQIyIYVt',
			server: 'F3JxL62hhpsnYK16oTg0R3A6SUdeQ6SLZmlWgSgQ',
			client: 'GZIN8ZcKwlmcJe4Y8B14a2J17iFasnzQfAw8vZhX'
		};

		Parse.initialize(keys.appID, keys.js);

		function getAll(){
			// var trainings  = $resource("https://api.parse.com/1/classes/Training/1hN9ZYc3XW").get();

			var defer = $q.defer();

			var TrainingCollection = Parse.Collection.extend({
				model: Parse.Object.extend('Training')
			});

			var collection = new TrainingCollection();

			collection.fetch({
			  success: function(collection) {
			  	var trainings = [];
			  	
			  	collection.forEach(function(item){
			  		trainings.push(item.attributes);
			  	});

			  	defer.resolve(trainings);
			  },
			  error: function(collection, error) {
			    // The collection could not be retrieved.
			    defer.resolve(false);
			  }
			});

			return defer.promise;
		}

		/*
		* Get a training session by its id
		*/
		function getTrainingById(id){
			return getAll().filter(function(session) {
				return session.id === id;
			});
		}

			
		return {
			getAll: getAll,
			getTrainingById: getTrainingById
		}
		
	}

	angular.module('philosAngularApp').factory('trainingFactory', ['$resource', '$q', trainingFactory]);

})();








