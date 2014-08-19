/*
* Training module & configuration
*/

(function(){
'use strict';

	function configuration($routeProvider) {
		$routeProvider
			.when('/trainings', {
		      	controller: 'TrainingController',
				controllerAs: 'training',
				templateUrl: 'modules/training/training.html'
		    })
		    .when('/training', {
		      	controller: 'TrainingController',
				controllerAs: 'training',
				templateUrl: 'modules/training/training.html'
		    });
	}

	angular
		.module('training', [])
		.config(['$routeProvider',configuration]);

})();