/*
* Training controller
*/

(function(){
'use strict';
	
	function TrainingController(CurrentUser, trainingFactory) {
	}

	angular
		.module('training')
		.controller('TrainingController', [
				'CurrentUser',
				'trainingFactory',
				TrainingController
			]);

})();