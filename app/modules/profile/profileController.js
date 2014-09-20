(function(){
	'use strict';


	function ProfileController($scope, $document, $rootScope, profileFactory){

		$document.scrollTop(0, 0);

		//User object
		profileFactory.getUser(true).then(function(user){
			debugger;
			$scope.user = user;
			$rootScope.currentUser = user;
			$scope.apply();
		}); 

		// {
		// 	firstname: 'Davy',
		// 	lastname: 'Engone',
		// 	email: 'davy@philos.io',
		// 	password: '',
		// 	mobile: '+32488790802',
		// 	address1: 'Dorpsplein 7/2',
		// 	postalcode: '3080',
		// 	city: 'Tervuren',
		// 	companyOrSchool: 'Philos.io',
		// 	jobTitle: 'Software Engineer',
		// 	linkedIn: '',
		// 	twitter: '',
		// 	github: ''
		// };

		$scope.isEditMode = false;
		$scope.showSession = false;

		$scope.enableSocialMedia = function(){
			var user = $scope.user;
			return !(user && user.github && user.linkedIn && user.twitter);
		};

		$scope.sessions = function(){
			$scope.trainings = $rootScope.currentUser.sessions;
			$scope.showSession = !$scope.showSession;
		};

		$scope.edit = function(){
			$scope.isEditMode = !$scope.isEditMode;	
		};

		$scope.update = function(){
			$scope.isEditMode = false;
			$document.scrollTop(0, 0);
		};

		$scope.unlinkTwitter = function(){
			throw 'now implemented yet!'
		};

		$scope.unlinkGithub = function(){
			throw 'now implemented yet!'
		};

		$scope.unlinkLinkedIn = function(){
			throw 'now implemented yet!'
		};
	}	

	angular.module('profile')
		.controller('ProfileController', [
			'$scope', 
			'$document', 
			'$scope', 
			'profileFactory', ProfileController])
		.directive('changemode', function(){
			return {
				restrict:'A',
				link: function(scope, el, attrs, ctrl){
					el.click(function(evt){
						var text = el.text();
						if (text === 'Edit') { 
							el.text('Cancel'); 
						}else{
							el.text('Edit');
						}
					});
				}
			}
		});
})();