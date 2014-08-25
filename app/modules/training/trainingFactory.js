/*
* Training Factory
*/

(function(){
	'use strict';

	function trainingFactory($http) {

		function getAll(){

			var trainings = 
			[
				{
					id: Math.floor(Math.random(100, 1000)*100),
					title: "Introduction to JavaScript",
					description: "Curabitur id vulputate nisl, vel pulvinar dolor. Proin eu semper odio, sit amet vehicula tortor. Curabitur interdum sit amet erat hendrerit luctus. Vestibulum in mauris vitae lacus pulvinar ornare quis eu est. Duis euismod, neque eu lobortis imperdiet, mi lacus. ",
					date: "22-27 Sept. 2014",
					tags: ['javascript', 'node.js', 'angularjs'],
					pace: 'Intense',
					image: "images/javascript.jpg",
					maxAttendees: 16,
					numberAttendees: 8,
					location: {
						city: "San Francisco"
					}
				},
				{
					id: Math.floor(Math.random(100, 1000)*100),
					title: "Introduction to JavaScript",
					description: "Curabitur id vulputate nisl, vel pulvinar dolor. Proin eu semper odio, sit amet vehicula tortor. Curabitur interdum sit amet erat hendrerit luctus. Vestibulum in mauris vitae lacus pulvinar ornare quis eu est. Duis euismod, neque eu lobortis imperdiet, mi lacus. ",
					date: "22-27 Sept. 2014",
					tags: ['javascript', 'node.js', 'angularjs'],
					pace: 'Intense',
					image: "images/javascript.jpg",
					maxAttendees: 16,
					numberAttendees: 8,
					location: {
						city: "Brussels"
					}
				},
				{
					id: Math.floor(Math.random(100, 1000)*100),
					title: "Introduction to JavaScript",
					description: "Curabitur id vulputate nisl, vel pulvinar dolor. Proin eu semper odio, sit amet vehicula tortor. Curabitur interdum sit amet erat hendrerit luctus. Vestibulum in mauris vitae lacus pulvinar ornare quis eu est. Duis euismod, neque eu lobortis imperdiet, mi lacus. ",
					date: "22-27 Sept. 2014",
					tags: ['javascript', 'node.js', 'angularjs'],
					pace: 'Intense',
					image: "images/javascript.jpg",
					maxAttendees: 16,
					numberAttendees: 16,
					location: {
						city: "San Francisco"
					}
				}
			];

			return trainings;
		}

			
		return {
			getAll: getAll
		}
		
	}

	angular.module('philosAngularApp').factory('trainingFactory', ['$http', trainingFactory]);

})();