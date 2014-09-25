/*
* Training module & configuration
*/

(function(){
'use strict';

	function configuration($routeProvider) {
		$routeProvider
			.when('/one-week-one-project', {
		      	controller: 'TrainingController',
				templateUrl: 'views/trainings.html'
		    })
		    .when('/one-week-one-project/:url', {
		      	controller: 'TrainingDetailsController',
				templateUrl: 'views/trainingDetails.html'
		    });
	}

	angular
		.module('training', [])
		.config(['$routeProvider',configuration]);

})();