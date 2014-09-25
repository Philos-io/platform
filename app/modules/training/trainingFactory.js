/*
* Training Factory
*/

(function(){
	'use strict';


	/*
	*  TrainingFactory constructor
	*/
	function trainingFactory($resource, $q, $window) {

		/*
		* Get all the training sessions!!
		*/
		function getAll(){
			// var trainings  = $resource("https://api.parse.com/1/classes/Training/1hN9ZYc3XW").get();
			var defer = $q.defer();


			var TrainingCollection = Parse.Collection.extend({
				model: Parse.Object.extend('Training')
			});

			var collection = new TrainingCollection();

			collection.fetch({
			  success: function(collection) {
			  	var trainings = [];
			  	
			  	collection.forEach(function(item){
			  		var training = item.attributes;
			  		training.id = item.id;
			  		trainings.push(training);
			  	});

			  	defer.resolve(trainings);
			  },
			  error: function(collection, error) {
			    // The collection could not be retrieved.
			    defer.resolve(false);
			  }
			});

			return defer.promise;
		}

		/*
		* Get a training session by its id
		*/
		function getTrainingById(url){
			return JSON.parse($window.localStorage.trainings || getAll()).filter(function(session) {
				debugger;
				return session.url === url;
			});
		}

			
		return {
			getAll: getAll,
			getTrainingById: getTrainingById
		}
		
	}

	angular.module('philosAngularApp').factory('trainingFactory', ['$resource', '$q', '$window', trainingFactory]);

})();



// var trainings = 
			// [
			// 	{
			// 		id: '2098',
			// 		corporate: false,
			// 		title: "Become A Productive NodeJS Programmer in one week",
			// 		shortDescription: "This is a deepth dive into JavaScript on the server: NodeJS! In this One week, One project we're going to build, deploy and monitore a NodeJS application! Throughout our journey, we're going to learn everything you need to know to get going with NodeJS!",
			// 		date: "14 Oct - 19 Sept 2014",
			// 		tags: ['JavaScript', 'NodeJS', 'Express'],
			// 		pace: 'Intense',
			// 		paceDescription: '40 hours of NodeJS',
			// 		image: "images/nodejs.jpg",
			// 		maxAttendees: 12,
			// 		attendees: [68787, 58769, 67575, 906543],
			// 		cost: 160,
			// 		currency: 'Euro',
			// 		period: 'week',
			// 		description: [
			// 			{
			// 				unit: 'Unit 1: Getting Started With NodeJS',
			// 				topics: ['JavaScript Fundamental for understanding NodeJS','Introduction to git and GitHub workflow','Installing NodeJS on Mac and Windows', 'Node Module System', 'Node Package Manager']
			// 			},
			// 			{
			// 				unit: 'Unit 2: Building a web application using NodeJS',
			// 				topics: ['Build a restful API with Express 4','Real time web application with Socket.io', 'Templating engine with Jade', 'Testing with Mocha', 'Using mongoose and MongoDB']
			// 			},
			// 			{
			// 				unit: 'Unit 3: Scaling and Deploying your NodeJS Application',
			// 				topics: ['Getting NodeJS application ready for production', 'Deploying on heroku', 'Deploying on AWS', 'Deploying on Azure']
			// 			},
			// 			{
			// 				unit: 'Unit 4: Internet of things',
			// 				topics: ['Piloting a drone with NodeJS', 'Introduction to CylonJS', 'Gesture and motion control with LEAP MOTION']
			// 			},
			// 			{
			// 				unit: 'Unit 5: Demo day',
			// 				topics: ['Come and show us what you built with your new skills', 'NodeJS and Security (Talk by an expert)']
			// 			}
			// 		],
			// 		location: {
			// 			city: "Brussels"
			// 		},
			// 		host: {
			// 			name: 'Philos.io',
			// 			nickname: 'PhilosHQ: Hacker Dojo',
			// 			numberOfEventsHosted: 12,
			// 			upcomingEvents: [20, 30]},
			// 		mentors:[
			// 			{
			// 				firstName: 'Davy',
			// 				lastName: 'Engone',
			// 				company: 'Philos.io',
			// 				fullName: 'Davy Engone',
			// 				profession: 'CTO',
			// 				picture: 'images/davy.jpg',
			// 				description: 'Davy is Software Engineer and CTO at Philos.io. He has many years of experience as developer! He used to work for famo.us in the US where he led the team that build famo.us university! He also works as a trainer and consultant for Alten Belgium where he trained teams on technologies like JavaScript, KnockoutJS, ASP.NET Web API, Unit testing, AngularJS, NodeJS. Davy is an early adopter on many technologies including NodeJS, Ionic Framework and AngularJS',
			// 				sessionAttented: 2,
			// 				sessionOrganized: 10
			// 			}],
			// 		prerequis:['Your laptop', 'Github Account', 'NodeJS Installed', 'Heroku Account'],
			// 		who: ['Developers with experience using php, C#, Java, Scala...', 'Frontend dev who wants to learn more about the server side', 'Engineer with some programming experience', 'Computer Science Students'],
			// 		takeAways: ['Be able to prototype quickly your NodeJS application', 'Pair programming', 'JavaScript OS: The big picture', 'Write clean and maintenable code', 'NodeJS will become a very good friend'],
			// 		when: [
			// 			{
			// 				day: 'Monday',
			// 				time: '18h30-23h30',
			// 				required: false,
			// 				description: 'Session starts on tuesdays',
			// 				open: false
			// 			},
			// 			{
			// 				day: 'Tuesday',
			// 				time: '18h30-23h30',
			// 				required: true,
			// 				description: '',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Wednesday',
			// 				time: '18h30-23h30',
			// 				required: true,
			// 				description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Thursday',
			// 				time: '18h30-23h30',
			// 				required: true,
			// 				description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Friday',
			// 				time: '18h30-23h30',
			// 				required: false,
			// 				description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Saturday',
			// 				time: '9h00-21h00',
			// 				required: true,
			// 				description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Sunday',
			// 				time: '13h00-18h00',
			// 				required: false,
			// 				description: 'The room will be available for you if you want to work on your project! Davy will be around',
			// 				open: true
			// 			}
			// 		]
			// 	},
			// 	{
			// 		id: '2987',
			// 		title: "Building LinkedIn mobile with Ionic Framework and AngularJS",
			// 		corporate: false,
			// 		shortDescription: "Have you tried LinkedIn mobile? How did you find it? Straight to the point, right? Imagine you had the skills to build such an application? This is what you gonna learn during this intense session of 'One week, one project'! Our mentors will teach you how to use Angularjs, Cordova (ng-cordova) and NodeJS to build a slicker version of LinkedIn mobile! Join US!",
			// 		date: "21 Oct - 26 Oct. 2014",
			// 		tags: ['JavaScript', 'AngularJS', 'Ionic'],
			// 		pace: 'Intense',
			// 		paceDescription: '40 hours of hacking',
			// 		image: "images/angular-ionic.png",
			// 		maxAttendees: 12,
			// 		attendees: [],
			// 		cost: 160,
			// 		currency: 'Euro',
			// 		period: 'week',
			// 		description: [
			// 			{
			// 				unit: 'Unit 1: Setting up everything',
			// 				topics: ['JavaScript Fundamentals','Introduction to git and GitHub workflow','Command line: from zero to confident in 60 minutes', 'Install Ionic and getting started with Ionic CLI', 'Mobile Developement: The big picture', 'Introduction to Cordova']
			// 			},
			// 			{
			// 				unit: 'Getting started With AngularJS and the fantastic Ionic Framework',
			// 				topics: ['Understanding AngularJS','Deep dive into Angular Directives', 'Introduction to Ionic Framework']
			// 			},
			// 			{
			// 				unit: 'Unit 3: Building a clone of LinkedIn mobile (fun fun fun)',
			// 				topics: ['OAuth with LinkedIn', 'Using Ionic Components', 'Building custom Components', 'Off-line and online modes', 'Communicating with an ExpressJS API', 'Introduction to Backend as Service with Parse.com and Firebase', 'From 2 ways binding to 3 ways binding with Firebase', 'Designing the app and defining the scope','Best practices on writing Ionic/AngularJS apps', 'Accessing your contacts information with ng-cordova', 'Exploring more options on ng-cordova']
			// 			},
			// 			{
			// 				unit: 'Unit 4: Test and Deployment',
			// 				topics: ['Testing the app on emulators and on devices','Deploying the server side on heroku', 'Submit your app on Google Play and Apple App Store']
			// 			},
			// 			{
			// 				unit: 'Unit 5: Demo day',
			// 				topics: ['Here we are, you got the skills now show us what you built', 'Introduction to Grunt/Gulp']
			// 			}
			// 		],
			// 		location: {
			// 			city: "Brussels"
			// 		},
			// 		host: {
			// 			name: 'Philos.io',
			// 			nickname: 'PhilosHQ: Hacker Dojo',
			// 			numberOfEventsHosted: 12,
			// 			upcomingEvents: [20, 30]
			// 		},
			// 		mentors:[
			// 			{
			// 				firstName: 'Davy',
			// 				lastName: 'Engone',
			// 				company: 'Philos.io',
			// 				fullName: 'Davy Engone',
			// 				profession: 'CTO',
			// 				picture: 'images/davy.jpg',
			// 				description: 'Davy is Software Engineer and CTO at Philos.io. He has many years of experience as developer! He used to work for famo.us in the US where he led the team that build famo.us university! He also works as a trainer and consultant for Alten Belgium where he trained teams on technologies like JavaScript, KnockoutJS, ASP.NET Web API, Unit testing, AngularJS, NodeJS. Davy is an early adopter on many technologies including NodeJS, Ionic Framework and AngularJS',
			// 				sessionAttented: 2,
			// 				sessionOrganized: 10
			// 			}
			// 		],
			// 		prerequis:['Your laptop', 'Github Account', 'Heroku Account', 'Ionic CLI installed', 'Android and/or iOS phone', 'A smile and a lot of energy'],
			// 		who: ['Web developers', 'iOS and Android developers', 'Engineer with some programming experience', 'Computer Science Students', 'Anyone who wants to learn how to build a mobile application'],
			// 		takeAways: ['You can build advanced mobile applications with web technologies', 'Pair programming', 'JavaScript OS: The big picture', 'Write clean and maintenable code', 'Ionic Framework and AngularJS are here to stay'],
			// 		when: [
			// 			{
			// 				day: 'Monday',
			// 				time: '18h30-23h30',
			// 				required: false,
			// 				description: 'Session starts on tuesdays',
			// 				open: false
			// 			},
			// 			{
			// 				day: 'Tuesday',
			// 				time: '18h30-23h30',
			// 				required: true,
			// 				description: '',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Wednesday',
			// 				time: '18h30-23h30',
			// 				required: true,
			// 				description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Thursday',
			// 				time: '18h30-23h30',
			// 				required: true,
			// 				description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Friday',
			// 				time: '18h30-23h30',
			// 				required: false,
			// 				description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
			// 				open: false
			// 			},
			// 			{
			// 				day: 'Saturday',
			// 				time: '9h00-21h00',
			// 				required: true,
			// 				description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Sunday',
			// 				time: '13h00-18h00',
			// 				required: false,
			// 				description: 'The room will be available for you if you want to work on your project! Davy will be around',
			// 				open: true
			// 			}
			// 		]
			// 	},
			// 	{
			// 		id: '2786',
			// 		corporate: false,
			// 		title: "JavaScript from Zero to Robot in one month",
			// 		shortDescription: "JavaScript is EVERYWHERE and we are about to take you on a short and intense journey to learn the ins and outs of the language! In these bundle of 4 'One week, one project' you will learn how to use JavaScript to build mobile apps, web apps, desktop apps, NodeJS applications and more so join us! ",
			// 		date: "08 Oct - 02 Nov 2014",
			// 		tags: ['JavaScript', 'NodeJS', 'AngularJS'],
			// 		pace: 'Intense',
			// 		paceDescription: '200 hours of hacking',
			// 		image: "images/javascript.jpg",
			// 		maxAttendees: 12,
			// 		attendees: [],
			// 		cost: 400,
			// 		description: [
			// 			{
			// 				unit: 'Week 1: Getting started with JavaScript from Scratch',
			// 				topics: ['JavaScript Fundamentals', 'JavaScript Design patterns', 'Advanced concepts in JavaScript', 'Dependency Injection', 'Designing a clone of the famous library lo-dashJS']
			// 			},
			// 			{
			// 				unit: 'Week 2: JavaScript on the Frontend',
			// 				topics: ['Introduction to JQuery', 'Introduction to AngularJS','Introduction to Bootstrap', 'Testing your frontend application', 'Building Github viewer using AngularJS apps']
			// 			},
			// 			{
			// 				unit: 'Week 3: JavaScript on the server with NodeJS',
			// 				topics: ['Getting started with NodeJS', 'Real time application using Socket.io', 'Designing an API with ExpressJS', 'Testing your Node apps', 'Building and deploying and NodeJS apps']
			// 			},
			// 			{
			// 				unit: 'Week 4: JavaScript for buiding mobile application',
			// 				topics: ['Getting started with the Ionic Framework', 'Getting started with Famo.us', 'Introduction to Cordova', 'Deploying your app on Android and iOS', 'Designing a clone of Viber using Famo.us']
			// 			},
			// 			{
			// 				unit: 'Week 5: JavaScript for the Internet of things',
			// 				topics: ['Piloting a drone with NodeJS', 'Introduction to CylonJS', 'Writing apps for your smart watch', 'Designing a LEAP Motion application']
			// 			}
			// 		],
			// 		location: {
			// 			city: "Brussels"
			// 		},
			// 		host: {
			// 			name: 'Philos.io',
			// 			nickname: 'PhilosHQ: Hacker Dojo',
			// 			numberOfEventsHosted: 12,
			// 			upcomingEvents: [20, 30]
			// 		},
			// 		mentors:[
			// 			{
			// 				firstName: 'Davy',
			// 				lastName: 'Engone',
			// 				company: 'Philos.io',
			// 				fullName: 'Davy Engone',
			// 				profession: 'CTO',
			// 				picture: 'images/davy.jpg',
			// 				description: 'Davy is the CTO at Philos.io. He has many years of experience as developer! He used to work for famo.us in the US where he led the team that build famo.us university! He also works as a trainer and consultant for Alten Belgium where he trained teams on technologies like JavaScript, KnockoutJS, ASP.NET Web API, Unit testing, AngularJS, NodeJS. Davy is an early adopter on many technologies including NodeJS, Ionic Framework and AngularJS',
			// 				sessionAttented: 2,
			// 				sessionOrganized: 10
			// 			}
			// 		],
			// 		prerequis:['Your laptop', 'Github Account', 'NodeJS Installed', 'Heroku Account'],
			// 		who: ['No prior programming experience is required for this bundle', 'Anyone who wants to learn how to build things', 'Students'],
			// 		takeAways: ['Be able to prototype quickly your NodeJS application', 'Pair programming', 'JavaScript OS: The big picture', 'Write clean and maintenable code', 'NodeJS will become a very good friend'],
			// 		when: [
			// 			{
			// 				day: 'Monday',
			// 				time: '18h30-23h30',
			// 				required: false,
			// 				description: 'Session starts on tuesdays',
			// 				open: false
			// 			},
			// 			{
			// 				day: 'Tuesday',
			// 				time: '18h30-23h30',
			// 				required: true,
			// 				description: '',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Wednesday',
			// 				time: '18h30-23h30',
			// 				required: true,
			// 				description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Thursday',
			// 				time: '18h30-23h30',
			// 				required: true,
			// 				description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Friday',
			// 				time: '18h30-23h30',
			// 				required: true,
			// 				description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
			// 				open: false
			// 			},
			// 			{
			// 				day: 'Saturday',
			// 				time: '9h00-21h00',
			// 				required: true,
			// 				description: 'The room will be available to work on your project the all evening! Not sure to have Davy around',
			// 				open: false
			// 			},
			// 			{
			// 				day: 'Sunday',
			// 				time: '13h00-18h00',
			// 				required: false,
			// 				description: 'The room will be available for you if you want to work on your project! Davy will be around',
			// 				open: true
			// 			}
			// 		]
			// 	},
			// 	{
			// 		id: '2463',
			// 		corporate: true,
			// 		title: "AngularJS workshop by Ari Lerner",
			// 		shortDescription: "AngularJS is a frontend framework that helps you build fast and well architected web applications! This workshop will take you from beginner to advanced level on AngularJS in few days. Ari, who is your trainer is the author of the popular book on Angular: nb-book and also the CTO and Co-founder of Fullstack.io.",
			// 		date: "13 Oct - 17 Oct 2014",
			// 		tags: ['JavaScript', 'AngularJS', 'Ionic'],
			// 		pace: 'Intense',
			// 		paceDescription: '40 hours',
			// 		image: "images/angular.jpeg",
			// 		maxAttendees: 20,
			// 		attendees: [],
			// 		cost: 400,
			// 		description: [
			// 			{
			// 				unit: 'Unit 1: Getting started with AngularJS',
			// 				topics: ['JavaScript introduction', 'Why Angular', 'Introduction to Angular', 'Scopes', 'Controllers', 'Built-in directives', 'Built-in Filters', 'Angular expressions', 'XHR/Introduction to promises', '$http service', 'Introduction to ngRouter']
			// 			},
			// 			{
			// 				unit: 'Unit 2: Intermediate AngularJS topics',
			// 				topics: ['Building custom directives', 'Application architecture', 'Introduction to unit testing with Jasmine', 'Introduction to end-to-end testing with Jasmine', 'Require.js', 'Lazy-loading', 'The digest loop, in-depth', 'hardcore uiRouter']
			// 			},
			// 			{
			// 				unit: 'Unit 3: Advanced AngularJS topics',
			// 				topics: [' Unit testing in-depth, by example', 'End-to-end testing in-depth, by example', 'Advanced optimization techniques', 'Deployment, strategies', 'Building for mobile (with Ionic)', 'Building games with Angular']
			// 			},
			// 			{
			// 				unit: 'Unit 4: More examples on using Angular',
			// 				topics: ['Using AngularJS with a NodeJS Backend', 'Using AngularJS with ASP.NET MVC and Visual Studio by example', 'Using AngularJS with Java/J2EE by example', 'Using AngularJS with Php/Lavarel by example']
			// 			}
			// 		],
			// 		location: {
			// 			city: "Brussels"
			// 		},
			// 		host: {
			// 			name: 'Philos.io',
			// 			nickname: 'PhilosHQ: Hacker Dojo',
			// 			numberOfEventsHosted: 12,
			// 			upcomingEvents: [20, 30]
			// 		},
			// 		mentors:[
			// 		{
			// 			firstName: 'Ari',
			// 			lastName: 'Lerner',
			// 			company: 'Fullstack.io',
			// 			fullName: 'Ari Lerner',
			// 			profession: 'CTO and Co-founder',
			// 			picture: 'images/ari.png',
			// 			description: 'Ari is an author, developer with more than 20 years of experience. He is the CTO and co-founder of Fullstack.io in San Francisco and the author of the popular book on AngularJS: ng-book. Ari has many years of experience training team in companies like Google. Ari is also an international speaker at conference like ng-europe where he will be speaking about AngularJS in October 21-23, 2014',
			// 			sessionAttented: 0,
			// 			sessionOrganized: 0	
			// 		},
			// 		{
			// 			firstName: 'Davy',
			// 			lastName: 'Engone',
			// 			company: 'Philos.io',
			// 			fullName: 'Davy Engone',
			// 			profession: 'CTO',
			// 			picture: 'images/davy.jpg',
			// 			description: 'Davy is the CTO at Philos.io. He has many years of experience as developer! He used to work for famo.us in the US where he led the team that build famo.us university! He also works as a trainer and consultant for Alten Belgium where he trained teams on technologies like JavaScript, KnockoutJS, ASP.NET Web API, Unit testing, AngularJS, NodeJS. Davy is an early adopter on many technologies including NodeJS, Ionic Framework and AngularJS',
			// 			sessionAttented: 2,
			// 			sessionOrganized: 10
			// 		}],
			// 		prerequis:['Your laptop', 'Basic JavaScript knowledge', 'GitHub account'],
			// 		who: ['Anyone with a good command of JavaScript', 'Frondend developers', 'Software developers with prior programming experience', 'Computer science students'],
			// 		takeAways: ['why using AngularJS for your next project', 'Learning Angularjs from one of the best Angular developer in the world', 'Integration of Angularjs in an existing project', 'All attendees will receive a copy of ng-book by Ari'],
			// 		when: [
			// 			{
			// 				day: 'Monday',
			// 				time: '9h00-17h',
			// 				required: true,
			// 				description: 'Attendees should arrive 20 minutes ealier!',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Tuesday',
			// 				time: '9h00-17h',
			// 				required: true,
			// 				description: '',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Wednesday',
			// 				time: '9h00-17h',
			// 				required: true,
			// 				description: '',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Thursday',
			// 				time: '9h00-17h',
			// 				required: true,
			// 				description: '',
			// 				open: true
			// 			},
			// 			{
			// 				day: 'Friday',
			// 				time: '9h00-15h',
			// 				required: true,
			// 				description: '',
			// 				open: true
			// 			}
			// 		]
			// 	},
			// 	{
			// 		id:'2981',
			// 		corporate:false,
			// 		title:"Build a website in 5 days",
			// 		shortDescription:"Learn how to build a website without having and programming background. A look at the basics of how to create a website from selecting a domain name, to setting up a hosting space, to modifying a template into a personalised website by using Bootstrap.",
			// 		date:"20 Oct - 24 Oct 2014",
			// 		tags:["Beginners","Hosting","HTML","CSS","jQuery","Bootstrap"],
			// 		pace:"Medium",
			// 		paceDescription:"9",
			// 		image:"images/website.jpg",
			// 		maxAttendees:12,
			// 		attendees:[68787,58769,67575,906543],
			// 		cost:160,
			// 		description:[
			// 			{
			// 				unit:"Unit 1: Setting up your website",
			// 				topics:["Purchasing a domain name","Setting up a hosting space","Installing development software","Webpage scripting basics"]
			// 			},
			// 			{
			// 				unit:"Unit 2: Working with a bootstrap template",
			// 				topics:["Bootstrap overview","Selecting a template","Basic HTML / CSS","Understanding the code in your template"]
			// 			},
			// 			{
			// 				unit:"Unit 3: Implementing website content",
			// 				topics:["Determining your website structure","Modifying code","Creating a contact form","Launching website"]
			// 			}
			// 			],
			// 			location:
			// 			{
			// 				city:"Brussels"
			// 			},
			// 			host:
			// 			{
			// 				name:"Philos.io",
			// 				nickname:"PhilosHQ: Hacker Dojo",
			// 				numberOfEventsHosted:12,
			// 				upcomingEvents:[20,30]
			// 			},
			// 			mentors:
			// 			[
			// 				{
			// 					firstName:"Alex",
			// 					lastName:"Aleksanyan",
			// 					company:"Neocodis",
			// 					fullName:"Alex Aleksanyan",
			// 					profession:"Owner",
			// 					picture:"images/alex.jpg",
			// 					description:"Alex is the Executive manager of Neocodis. With a background in Computer science and having developed websites for 13 years, he has experience in different programming languages, notably PHP. Having worked both on corporate websites and online portals in North America and Europe, he has built a team in Poland in order to offer better services for his clients. His focus is on PHP based websites and finding the best solutions for the needs of his clients",
			// 					sessionAttented:2,
			// 					sessionOrganized:10
			// 				}
			// 			],
			// 			prerequis:["Your laptop","A credit card or paypal account"],
			// 			who:["Entrepreneurs","Graphic designers","Communication officers"],
			// 			takeAways:["Learn the basics of a website","UX and Responsive design","Advantages of Bootstrap","Understand HTML / CSS","Demystify web programming"],
			// 			when:[
			// 			{
			// 				day:"Monday",
			// 				time:"18h30-21h30",
			// 				required:false,
			// 				description:"",
			// 				open:false
			// 			},
			// 			{
			// 				day:"Tuesday",
			// 				time:"18h30-21h30",
			// 				required:true,
			// 				description:"",
			// 				open:true
			// 			},
			// 			{
			// 				day:"Thursday",
			// 				time:"18h30-21h30",
			// 				required:true,
			// 				description:"",
			// 				open:true
			// 			}]
			// 	}
			// ];

			// var Training = Parse.Object.extend('Training');

			// var newtraining = new Training();

			// debugger;


			// var data  = JSON.parse(JSON.stringify(trainings[4]));

			// delete data.id;

			// newtraining.save(data, {
			// 	success:function(result){
			// 		console.log(result);
			// 		debugger;
			// 	},
			// 	error: function(result, error){
			// 		console.log(result, error);
			// 		debugger;
			// 	}
			// });








