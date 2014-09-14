/*
* Training controller
*/

(function(){
'use strict';
	
	function TrainingController($scope, $window, CurrentUser, trainingFactory) {
		

		if ($window.localStorage && !$window.localStorage.trainings) {
	      trainingFactory.getAll().then(function(trainings){
	        
	        // set the trainings
	        $scope.trainings = trainings;

	        // Save that in the localstorage
	        $window.localStorage.trainings = JSON.stringify(trainings);
	      });
	    }else{
	    	// No need to make a round trip to the database, just get the trainings from the localstorage
	      	$scope.trainings = JSON.parse($window.localStorage.trainings);
	    }
	}

	angular
		.module('training')
		.controller('TrainingController', [
				'$scope',
				'$window',
				'CurrentUser',
				'trainingFactory',
				TrainingController
			]);

})();