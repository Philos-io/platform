/*
* Training controller
*/

(function(){
'use strict';
	
	function TrainingController($window, CurrentUser, trainingFactory) {

		if (!$window.CurrentUser) {
			CurrentUser.fullname = 'Cyrille Pastorek';
	      	CurrentUser.picture = 'images/cyrille.jpg';
	      	CurrentUser.sessionsAttended = [];
	      	CurrentUser.upcomingSessions = [];
			$window.CurrentUser =  CurrentUser;
		}

		this.all = trainingFactory.getAll();
	}

	angular
		.module('training')
		.controller('TrainingController', [
				'$window',
				'CurrentUser',
				'trainingFactory',
				TrainingController
			]);

})();