/*
* Training Factory
*/

(function(){
	'use strict';


	/*
	*  TrainingFactory constructor
	*/
	function trainingFactory($http, $q, $window) {

		/*
		*  Public API: get all data either from the server or from the localstorage
		*/
		function getAll(){
			var trainings = getAllFromLocalStorage();

			if (trainings) {
				var defer = $q.defer();

				defer.resolve(trainings);

				return defer.promise;
			}

			return getAllFromServer();
		}
		/*
		* Get all the training sessions!!
		*/
		function getAllFromServer(){
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

			  	// Add to localstorage
			  	addAllToLocalStorage(trainings);

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
		* Private: Get data from localstorage
		*/
		function getAllFromLocalStorage(){
			if ($window.localStorage && $window.localStorage.trainings)
				return JSON.parse($window.localStorage.trainings); 
		}

		/*
		* Private: Add trainings to localstorage
		*/
		function addAllToLocalStorage(trainings){	
			if ($window.localStorage)
				$window.localStorage.trainings = JSON.stringify(trainings);
		}

		/*
		* Get a training session by its id
		*/
		function getTrainingById(url){
			// will mostly get the data from localStorage
			return getAllFromLocalStorage().filter(function(session) {
				return session.url === url;
			});
		}

			
		return {
			getAll: getAll,
			getTrainingById: getTrainingById
		}
		
	}

	angular.module('philosAngularApp').factory('trainingFactory', ['$http', '$q', '$window', trainingFactory]);

})();








