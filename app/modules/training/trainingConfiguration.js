/*
* Training module & configuration
*/

(function(){
'use strict';

	function configuration($routeProvider) {
		$routeProvider
			.when('/trainings', {
		      	controller: 'TrainingController',
				controllerAs: 'session',
				templateUrl: 'views/trainings.html'
		    })
		    .when('/trainings/:training_id', {
		      	controller: 'TrainingDetailsController',
				controllerAs: 'training',
				templateUrl: 'views/trainingDetails.html'
		    });
	}

	angular
		.module('training', [])
		.config(['$routeProvider',configuration]);

})();