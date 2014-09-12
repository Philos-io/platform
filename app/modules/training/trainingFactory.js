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
					corporate: false,
					title: "Become A Productive NodeJS Programmer in one week",
					shortDescription: "This is a deepth dive into JavaScript on the server: NodeJS! In this One week, One project we're going to build, deploy and monitore a NodeJS application! Throughout our journey, we're going to learn everything you need to know to get going with NodeJS!",
					date: "23 Sept - 28 Sept 2014",
					tags: ['JavaScript', 'NodeJS', 'Express'],
					pace: 'Intense',
					paceDescription: '40 hours of NodeJS',
					image: "images/nodejs.jpg",
					maxAttendees: 12,
					attendees: [68787, 58769, 67575, 906543],
					cost: 160,
					description: [
						{
							unit: 'Unit 1: Getting Started With NodeJS',
							topics: ['JavaScript Fundamental for understanding NodeJS','Introduction to git and GitHub workflow','Installing NodeJS on Mac and Windows', 'Node Module System', 'Node Package Manager']
						},
						{
							unit: 'Unit 2: Building a web application using NodeJS',
							topics: ['Build a restful API with Express 4','Real time web application with Socket.io', 'Templating engine with Jade', 'Testing with Mocha', 'Using mongoose and MongoDB']
						},
						{
							unit: 'Unit 3: Scaling and Deploying your NodeJS Application',
							topics: ['Getting NodeJS application ready for production', 'Deploying on heroku', 'Deploying on AWS', 'Deploying on Azure']
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
						nickname: 'PhilosHQ: Hacker Dojo',
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
						description: 'Davy is Software Engineer and CTO at Philos.io. He has many years of experience as developer! He used to work for famo.us in the US where he led the team that build famo.us university! He also works as a trainer and consultant for Alten Belgium where he trained teams on technologies like JavaScript, KnockoutJS, ASP.NET Web API, Unit testing, AngularJS, NodeJS. Davy is an early adopter on many technologies including NodeJS, Ionic Framework and AngularJS',
						sessionAttented: 2,
						sessionOrganized: 10
					},
					prerequis:['Your laptop', 'Github Account', 'NodeJS Installed', 'Heroku Account'],
					who: ['Developers with experience using php, C#, Java, Scala...', 'Frontend dev who wants to learn more about the server side', 'Engineer with some programming experience', 'Computer Science Students'],
					takeAways: ['Be able to prototype quickly your NodeJS application', 'Pair programming', 'JavaScript OS: The big picture', 'Write clean and maintenable code', 'NodeJS will become a very good friend'],
					when: [
						{
							day: 'Monday',
							time: '18h30-23h30',
							required: false,
							description: 'Session starts on tuesdays',
							open: false
						},
						{
							day: 'Tuesday',
							time: '18h30-23h30',
							required: true,
							description: '',
							open: true
						},
						{
							day: 'Wednesday',
							time: '18h30-23h30',
							required: true,
							description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
							open: true
						},
						{
							day: 'Thursday',
							time: '18h30-23h30',
							required: true,
							description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
							open: true
						},
						{
							day: 'Friday',
							time: '18h30-23h30',
							required: true,
							description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
							open: false
						},
						{
							day: 'Saturday',
							time: '9h00-21h00',
							required: true,
							description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
							open: false
						},
						{
							day: 'Sunday',
							time: '13h00-18h00',
							required: false,
							description: 'The room will be available for you if you want to work on your project! Davy will be around'
						}
					]
				},
				{
					id: 20, //Math.floor(Math.random(100, 1000)*100),
					title: "Building LinkedIn mobile with Ionic Framework and AngularJS",
					corporate: false,
					shortDescription: "Have you tried LinkedIn mobile? How did you find it? Straight to the point, right? Imagine you had the skills to build such an application? This is what you gonna learn during this intense session of 'One week, one project'! Our mentors will teach you how to use Angularjs, Cordova (ng-cordova) and NodeJS to build a slicker version of LinkedIn mobile! Join US!",
					date: "30 Sept - 06 Oct. 2014",
					tags: ['JavaScript', 'AngularJS', 'Ionic'],
					pace: 'Intense',
					paceDescription: '40 hours of hacking',
					image: "images/angular-ionic.png",
					maxAttendees: 12,
					attendees: [],
					cost: 160,
					description: [
						{
							unit: 'Unit 1: Setting up everything',
							topics: ['JavaScript Fundamentals','Introduction to git and GitHub workflow','Command line: from zero to confident in 60 minutes', 'Install Ionic and getting started with Ionic CLI', 'Mobile Developement: The big picture', 'Introduction to Cordova']
						},
						{
							unit: 'Getting started With AngularJS and the fantastic Ionic Framework',
							topics: ['Understanding AngularJS','Deep dive into Angular Directives', 'Introduction to Ionic Framework']
						},
						{
							unit: 'Unit 3: Building a clone of LinkedIn mobile (fun fun fun)',
							topics: ['OAuth with LinkedIn', 'Using Ionic Components', 'Building custom Components', 'Off-line and online modes', 'Communicating with an ExpressJS API', 'Introduction to Backend as Service with Parse.com and Firebase', 'From 2 ways binding to 3 ways binding with Firebase', 'Designing the app and defining the scope','Best practices on writing Ionic/AngularJS apps', 'Accessing your contacts information with ng-cordova', 'Exploring more options on ng-cordova']
						},
						{
							unit: 'Unit 4: Test and Deployment',
							topics: ['Testing the app on emulators and on devices','Deploying the server side on heroku', 'Submit your app on Google Play and Apple App Store']
						},
						{
							unit: 'Unit 5: Demo day',
							topics: ['Here we are, you got the skills now show us what you built', 'Introduction to Grunt/Gulp']
						}
					],
					location: {
						city: "Brussels"
					},
					host: {
						name: 'Philos.io',
						nickname: 'PhilosHQ: Hacker Dojo',
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
						description: 'Davy is Software Engineer and CTO at Philos.io. He has many years of experience as developer! He used to work for famo.us in the US where he led the team that build famo.us university! He also works as a trainer and consultant for Alten Belgium where he trained teams on technologies like JavaScript, KnockoutJS, ASP.NET Web API, Unit testing, AngularJS, NodeJS. Davy is an early adopter on many technologies including NodeJS, Ionic Framework and AngularJS',
						sessionAttented: 2,
						sessionOrganized: 10
					},
					prerequis:['Your laptop', 'Github Account', 'Heroku Account', 'Ionic CLI installed', 'Android and/or iOS phone', 'A smile and a lot of energy'],
					who: ['Web developers', 'iOS and Android developers', 'Engineer with some programming experience', 'Computer Science Students', 'Anyone who wants to learn how to build a mobile application'],
					takeAways: ['You can build advanced mobile applications with web technologies', 'Pair programming', 'JavaScript OS: The big picture', 'Write clean and maintenable code', 'Ionic Framework and AngularJS are here to stay so you better bet on them right now'],
					when: [
						{
							day: 'Monday',
							time: '18h30-23h30',
							required: false,
							description: 'Session starts on tuesdays',
							open: false
						},
						{
							day: 'Tuesday',
							time: '18h30-23h30',
							required: true,
							description: '',
							open: true
						},
						{
							day: 'Wednesday',
							time: '18h30-23h30',
							required: true,
							description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
							open: true
						},
						{
							day: 'Thursday',
							time: '18h30-23h30',
							required: true,
							description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
							open: true
						},
						{
							day: 'Friday',
							time: '18h30-23h30',
							required: true,
							description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
							open: false
						},
						{
							day: 'Saturday',
							time: '9h00-21h00',
							required: true,
							description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
							open: false
						},
						{
							day: 'Sunday',
							time: '13h00-18h00',
							required: false,
							description: 'The room will be available for you if you want to work on your project! Davy will be around'
						}
					]
				},
				{
					id: 30, //Math.floor(Math.random(100, 1000)*100),
					corporate: false,
					title: "JavaScript from Zero to Robot in one month",
					shortDescription: "JavaScript is EVERYWHERE and we are about to take you on a short and intense journey to learn the ins and outs of the language! In these bundle of 4 'One week, one project' you will learn how to use JavaScript to build mobile apps, web apps, desktop apps, NodeJS applications and more so join us! ",
					date: "08 Oct - 02 Nov 2014",
					tags: ['JavaScript', 'NodeJS', 'AngularJS'],
					pace: 'Intense',
					paceDescription: '200 hours of hacking',
					image: "images/javascript.jpg",
					maxAttendees: 12,
					attendees: [68787, 58769, 67575, 906543, 68787, 58769, 67575, 906543, 68787, 58769],
					cost: 400,
					description: [
						{
							unit: 'Week 1: Getting started with JavaScript from Scratch',
							topics: ['JavaScript Fundamentals', 'JavaScript Design patterns', 'Advanced concepts in JavaScript', 'Dependency Injection', 'Designing a clone of the famous library lo-dashJS']
						},
						{
							unit: 'Week 2: JavaScript on the Frontend',
							topics: ['Introduction to JQuery', 'Introduction to AngularJS','Introduction to Bootstrap', 'Testing your frontend application', 'Building Github viewer using AngularJS apps']
						},
						{
							unit: 'Week 3: JavaScript on the server with NodeJS',
							topics: ['Getting started with NodeJS', 'Real time application using Socket.io', 'Designing an API with ExpressJS', 'Testing your Node apps', 'Building and deploying and NodeJS apps']
						},
						{
							unit: 'Week 4: JavaScript for buiding mobile application',
							topics: ['Getting started with the Ionic Framework', 'Getting started with Famo.us', 'Introduction to Cordova', 'Deploying your app on Android and iOS', 'Designing a clone of Viber using Famo.us']
						},
						{
							unit: 'Week 5: JavaScript for the Internet of things',
							topics: ['Piloting a drone with NodeJS', 'Introduction to CylonJS', 'Writing apps for your smart watch', 'Designing a LEAP Motion application']
						}
					],
					location: {
						city: "Brussels"
					},
					host: {
						name: 'Philos.io',
						nickname: 'PhilosHQ: Hacker Dojo',
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
						description: 'Davy is the CTO at Philos.io. He has many years of experience as developer! He used to work for famo.us in the US where he led the team that build famo.us university! He also works as a trainer and consultant for Alten Belgium where he trained teams on technologies like JavaScript, KnockoutJS, ASP.NET Web API, Unit testing, AngularJS, NodeJS. Davy is an early adopter on many technologies including NodeJS, Ionic Framework and AngularJS',
						sessionAttented: 2,
						sessionOrganized: 10
					},
					prerequis:['Your laptop', 'Github Account', 'NodeJS Installed', 'Heroku Account'],
					who: ['No prior programming experience is required for this bundle', 'Anyone who wants to learn how to build things', 'Students'],
					takeAways: ['Be able to prototype quickly your NodeJS application', 'Pair programming', 'JavaScript OS: The big picture', 'Write clean and maintenable code', 'NodeJS will become a very good friend'],
					when: [
						{
							day: 'Monday',
							time: '18h30-23h30',
							required: false,
							description: 'Session starts on tuesdays',
							open: false
						},
						{
							day: 'Tuesday',
							time: '18h30-23h30',
							required: true,
							description: '',
							open: true
						},
						{
							day: 'Wednesday',
							time: '18h30-23h30',
							required: true,
							description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
							open: true
						},
						{
							day: 'Thursday',
							time: '18h30-23h30',
							required: true,
							description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
							open: true
						},
						{
							day: 'Friday',
							time: '18h30-23h30',
							required: true,
							description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
							open: false
						},
						{
							day: 'Saturday',
							time: '9h00-21h00',
							required: true,
							description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
							open: false
						},
						{
							day: 'Sunday',
							time: '13h00-18h00',
							required: false,
							description: 'The room will be available for you if you want to work on your project! Davy will be around'
						}
					]
				}
			];
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