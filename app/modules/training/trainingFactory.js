/*
* Training Factory
*/

(function(){
	'use strict';

	function trainingFactory($http, $window) {

		function getAll(){
			console.log('inside getAll');

			if ($window.localStorage.all) {
				return $window.localStorage.all;
			}

			var trainings = 
			[
				{
					id: 10, //Math.floor(Math.random(100, 1000)*100),
					title: "Become A Productive NodeJS Programmer in one week",
					shortDescription: "This is a deepth dive into JavaScript on the server: NodeJS! In this One week, One project we're going to build, deploy and monitore a NodeJS application! Throughout our journey, we're going to learn everything you need to know to get going with NodeJS!",
					date: "22-27 Sept. 2014",
					tags: ['JavaScript', 'NodeJS', 'Express'],
					pace: 'Intense',
					image: "images/nodejs.jpg",
					maxAttendees: 16,
					numberAttendees: 8,
					description: [
						{
							unit: 'Unit 1',
							topics: ['Getting Started With NodeJS']
						},
						{
							unit: 'Unit 2',
							topics: ['Building a web application using NodeJS']
						},
						{
							unit: 'Unit 3',
							topics: ['Scaling and Deploying your NodeJS Application']
						},
						{
							unit: 'Unit 4',
							topics: ['Getting Started With NodeJS']
						}
					],
					location: {
						city: "Brussels"
					},
					prerequis:['Your laptop', 'Github Account', 'NodeJS Installed', 'Heroku Account']
				},
				{
					id: 20, //Math.floor(Math.random(100, 1000)*100),
					title: "Introduction to JavaScript",
					shortDescription: "Curabitur id vulputate nisl, vel pulvinar dolor. Proin eu semper odio, sit amet vehicula tortor. Curabitur interdum sit amet erat hendrerit luctus. Vestibulum in mauris vitae lacus pulvinar ornare quis eu est. Duis euismod, neque eu lobortis imperdiet, mi lacus. ",
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
					id: 30, //Math.floor(Math.random(100, 1000)*100),
					title: "Introduction to JavaScript",
					shortDescription: "Curabitur id vulputate nisl, vel pulvinar dolor. Proin eu semper odio, sit amet vehicula tortor. Curabitur interdum sit amet erat hendrerit luctus. Vestibulum in mauris vitae lacus pulvinar ornare quis eu est. Duis euismod, neque eu lobortis imperdiet, mi lacus. ",
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

	angular.module('philosAngularApp').factory('trainingFactory', ['$http', '$window', trainingFactory]);

})();