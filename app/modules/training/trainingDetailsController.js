/*
* Training's details controller
*/

(function(){
'use strict';
	
	function TrainingDetailsController($routeParams, CurrentUser, trainingFactory, $rootScope) {

		this.session = trainingFactory.getTrainingById(parseInt($routeParams.training_id))[0];

		this.session.numberAttendees = this.session.attendees.length;

		/*
		* Register for a training
		*/
		this.register = function (){

			// if the user in not logged then redirect to the login page

			// Add the current user into the list of attendees for the current session
			CurrentUser.upcomingSessions.push(this.session.id);
			// Add the session into the list of upcoming session fot the current user
			this.session.attendees.push(CurrentUser);
			this.session.numberAttendees++;
			// redirect the user to eventbrite for payment

			// Broadcast the information around the whole application
			
		};
	}

	angular
		.module('training')
		.controller('TrainingDetailsController', [
				'$routeParams',
				'CurrentUser',
				'trainingFactory',
				'$rootScope',
				TrainingDetailsController
			]);

})();