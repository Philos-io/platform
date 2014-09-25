/*
* Training Factory
*/

(function(){
	'use strict';


	/*
	*  TrainingFactory constructor
	*/
	function trainingFactory($resource, $q, $window) {

		/*
		* Get all the training sessions!!
		*/
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
			  		var training = item.attributes;
			  		training.id = item.id;
			  		trainings.push(training);
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
		function getTrainingById(url){
			return JSON.parse($window.localStorage.trainings || getAll()).filter(function(session) {
				debugger;
				return session.url === url;
			});
		}

			
		return {
			getAll: getAll,
			getTrainingById: getTrainingById
		}
		
	}

	angular.module('philosAngularApp').factory('trainingFactory', ['$resource', '$q', '$window', trainingFactory]);

})();








