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
				templateUrl: 'modules/training/trainings.html'
		    })
		    .when('/trainings/:training_id', {
		      	controller: 'TrainingController',
				controllerAs: 'training',
				templateUrl: 'modules/training/trainingDetails.html'
		    });
	}

	angular
		.module('training', [])
		.config(['$routeProvider',configuration]);

})();