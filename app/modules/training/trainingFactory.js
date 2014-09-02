/*
* Training Factory
*/

(function(){
	'use strict';


	/*
	*  TrainingFactory constructor
	*/
	function trainingFactory($http, $window) {

		/*
		* Get all the training sessions!!
		*/
		function getAll(){

			var trainings = 
			[
				{
					id: 10, //Math.floor(Math.random(100, 1000)*100),
					title: "Become A Productive NodeJS Programmer in one week",
					shortDescription: "This is a deepth dive into JavaScript on the server: NodeJS! In this One week, One project we're going to build, deploy and monitore a NodeJS application! Throughout our journey, we're going to learn everything you need to know to get going with NodeJS!",
					date: "22-27 Sept. 2014",
					tags: ['JavaScript', 'NodeJS', 'Express'],
					pace: 'Intense',
					paceDescription: '40 hours of NodeJS',
					image: "images/nodejs.jpg",
					maxAttendees: 2,
					attendees: [],
					cost: 160,
					description: [
						{
							unit: 'Unit 1: Getting Started With NodeJS',
							topics: ['JavaScript Fundamental for understanding NodeJS','Installing NodeJS on Mac and Windows', 'Node Module System', 'Node Package Manager']
						},
						{
							unit: 'Unit 2: Building a web application using NodeJS',
							topics: ['Build a restful API with Express or Hapi','Real time web application with Socket.io', 'Templating engine', 'Testing with Mocha', 'Using mongoose and MongoDB']
						},
						{
							unit: 'Unit 3: Scaling and Deploying your NodeJS Application',
							topics: ['Scaling and Deploying your NodeJS Application']
						},
						{
							unit: 'Unit 4: Internet of things',
							topics: ['Piloting a drone with NodeJS', 'Introduction to CylonJS', 'Gesture and motion control with LEAP MOTION']
						},
						{
							unit: 'Unit 5: Demo day',
							topics: ['Come and show us what you built with your new skills', 'NodeJS and Security (Talk by an expert)']
						}
					],
					location: {
						city: "Brussels"
					},
					host: {
						name: 'Philos.io',
						nickname: 'PhilosHQ',
						numberOfEventsHosted: 12,
						upcomingEvents: [20, 30]
					},
					mentor:{
						firstName: 'Davy',
						lastName: 'Engone',
						company: 'Philos.io',
						fullName: 'Davy Engone',
						profession: 'CTO',
						picture: 'images/davy.jpg',
						description: 'Davy is a Software Engineer and CTO at Philos.io. He runs all the operation from the backend to frontend including devops and mobile applications.',
						sessionAttented: 2,
						sessionOrganized: 10
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
					maxAttendees: 2,
					numberAttendees: 0,
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

			$window.localStorage.sessions = trainings;
			return trainings;
		}

		/*
		* Get a training session by its id
		*/
		function getTrainingById(id){
			return getAll().filter(function(session) {
				return session.id === id;
			});
		}

			
		return {
			getAll: getAll,
			getTrainingById: getTrainingById
		}
		
	}

	angular.module('philosAngularApp').factory('trainingFactory', ['$http', '$window', trainingFactory]);

})();