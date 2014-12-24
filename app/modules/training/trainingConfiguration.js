/*
* Training module & configuration
*/

(function(){
'use strict';

	function configuration($routeProvider) {
		$routeProvider
			.when('/one-week-one-project', {
		      	controller: 'TrainingController',
				templateUrl: 'views/trainings.html',
				controllerAs: 'vm'
		    })
		    .when('/one-week-one-project/:url', {
		      	controller: 'TrainingDetailsController',
				templateUrl: 'views/trainingDetails.html',
				controllerAs: 'vm'
		    });
	}

	angular
		.module('training', [])
		.config(['$routeProvider',configuration]);

})();