!function(){"use strict";function a(a,b,c,d){var e,f=500,g=30;a.session={},d.getAll().then(function(b){e=a.session.all=b}),a.goTo=function(a){var b=document.getElementById(a),d=angular.element(b);c.scrollToElement(d,g,f)},a.corporate=!1,a.toggle=function(b){return a.corporate===b?void(a.corporate=!b):(a.session.all=[],void e.filter(function(c){c.corporate===b&&a.session.all.push(c)}))}}function b(a){a.when("/",{controller:"MainController",templateUrl:"views/main.html"}).when("/about",{controller:"MainController",templateUrl:"views/about.html"}).when("/team",{controller:"MainController",templateUrl:"views/team.html"}).otherwise({redirectTo:"/"})}function c(a){return{restrict:"A",scope:{id:"@toggleState"},link:function(b,c,d){var e=a.path();"/"!==e&&e.substr(1,e.length)===b.id&&(angular.element(document.getElementsByClassName("menu")).removeClass("active"),d.$addClass("active")),d.$$element.click(function(){var a=angular.element(d.$$element);a.hasClass("active")||(angular.element(document.getElementsByClassName("menu")).removeClass("active"),d.$addClass("active"))})}}}function d(a,b){return{link:function(a,c,d){c.bind("click",function(){var a=d.scrollTo,c=document.getElementById(a),e=angular.element(c);b.scrollToElement(e,0,500)})}}}function e(){var a={js:"LnV5YM6ZtvYZ7nrI2tx58IN8ABWTb67KgUJADAef",appID:"sNUJR4kRaArwjeBtlkdcdSm5cmDYeHidBQIyIYVt",server:"F3JxL62hhpsnYK16oTg0R3A6SUdeQ6SLZmlWgSgQ",client:"GZIN8ZcKwlmcJe4Y8B14a2J17iFasnzQfAw8vZhX"};Parse.initialize(a.appID,a.js)}angular.module("philosAngularApp",["ngRoute","ngResource","authentication","training","duScroll","profile","cart"]).run(e).config(["$routeProvider","$locationProvider","$compileProvider",b]).controller("MainController",["$scope","$rootScope","$document","trainingFactory","$window","CurrentUser",a]).directive("toggleState",["$location","$document","$rootScope",c]).directive("scrollTo",["$location","$anchorScroll",d])}(),function(){angular.module("philosAngularApp").constant("CurrentUser",{})}(),function(){"use strict";function a(a){a.when("/signup",{controller:"AuthController",templateUrl:"views/signup.html"}).when("/signin",{controller:"AuthController",templateUrl:"views/signin.html"}).when("/forgot",{controller:"AuthController",templateUrl:"views/forgot.html"})}angular.module("authentication",[]).config(["$routeProvider",a])}(),function(){"use strict";function a(a,b,c,d,e){function f(a){c.currentUser=a,c.auth=!1,d.path("/trainings")}function g(a){throw a}e.scrollTop(0,0),c.displayLogin=!1,a.signIn=function(){b.signIn(a.login).then(f,g)},a.signUp=function(){b.signUp(a.user).then(f,g)},c.logout=function(){b.logout(),d.path("/")}}angular.module("authentication").controller("AuthController",["$scope","authFactory","$rootScope","$location","$document",a])}(),function(){"use strict";function a(a){function b(a){return Parse.User.logIn(a.email,a.password,{success:d,error:e}),h.promise}function c(a){var b=new Parse.User;b.set("username",a.email);for(var c in a)b.set(c,a[c]);return b.signUp(null,{success:d,error:e}),h.promise}function d(a){var b=a.attributes;b.id=a.id,h.resolve(b)}function e(a,b){h.resolve({user:a,error:b})}function f(){Parse.User.logOut()}function g(){}var h=a.defer();return{signIn:b,signUp:c,logout:f,forgot:g}}angular.module("authentication").factory("authFactory",["$q",a])}(),function(){"use strict";function a(a){a.when("/one-week-one-project",{controller:"TrainingController",templateUrl:"views/trainings.html"}).when("/one-week-one-project/:url",{controller:"TrainingDetailsController",templateUrl:"views/trainingDetails.html"})}angular.module("training",[]).config(["$routeProvider",a])}(),function(){"use strict";function a(a,b,c,d,e){c.scrollTop(0,0),e.getAll().then(function(b){a.trainings=b})}angular.module("training").controller("TrainingController",["$scope","$window","$document","CurrentUser","trainingFactory",a])}(),function(){"use strict";function a(a,b,c,d){a.session=d.getTrainingById(c.url)[0],b.scrollTop(0,0),a.session.numberAttendees=a.session.attendees.length}angular.module("training").controller("TrainingDetailsController",["$scope","$document","$routeParams","trainingFactory",a])}(),function(){"use strict";function a(a,b,c){function d(){var a=f();if(a){var c=b.defer();return c.resolve(a),c.promise}return e()}function e(){var a=b.defer(),c=Parse.Collection.extend({model:Parse.Object.extend("Training")}),d=new c;return d.fetch({success:function(b){var c=[];b.forEach(function(a){var b=a.attributes;b.id=a.id,c.push(b)}),g(c),a.resolve(c)},error:function(){a.resolve(!1)}}),a.promise}function f(){return c.localStorage&&c.localStorage.trainings?JSON.parse(c.localStorage.trainings):void 0}function g(a){c.localStorage&&(c.localStorage.trainings=JSON.stringify(a))}function h(a){return f().filter(function(b){return b.url===a})}return{getAll:d,getTrainingById:h}}angular.module("philosAngularApp").factory("trainingFactory",["$http","$q","$window",a])}(),function(){"use strict";function a(a){a.when("/cart",{controller:"CartController",templateUrl:"views/cart.html"})}angular.module("cart",[]).config(["$routeProvider",a])}(),function(){"use strict";function a(){}angular.module("cart").controller("CartController",["$scope","cartFactory","$rootScope","$location",a])}(),function(){"use strict";function a(){}angular.module("cart").factory("cartFactory",["$q",a])}(),function(){"use strict";function a(a){a.when("/profile",{controller:"ProfileController",templateUrl:"views/profile.html"})}angular.module("profile",[]).config(["$routeProvider",a])}(),function(){"use strict";function a(a,b,c,d){b.scrollTop(0,0),d.getUser(!0).then(function(b){a.user=b,c.currentUser=b,a.apply()}),a.isEditMode=!1,a.showSession=!1,a.enableSocialMedia=function(){var b=a.user;return!(b&&b.github&&b.linkedIn&&b.twitter)},a.sessions=function(){a.trainings=c.currentUser.sessions,a.showSession=!a.showSession},a.edit=function(){a.isEditMode=!a.isEditMode},a.update=function(){a.isEditMode=!1,b.scrollTop(0,0)},a.unlinkTwitter=function(){throw"now implemented yet!"},a.unlinkGithub=function(){throw"now implemented yet!"},a.unlinkLinkedIn=function(){throw"now implemented yet!"}}angular.module("profile").controller("ProfileController",["$scope","$document","$scope","profileFactory",a]).directive("changemode",function(){return{restrict:"A",link:function(a,b){b.click(function(){var a=b.text();b.text("Edit"===a?"Cancel":"Edit")})}}})}(),function(){"use strict";function a(a){function b(a){var b=Parse.User.current();if(a){var f=new Parse.Query(Parse.User);f.get(b.id,{success:c,error:d})}else{var g=b.attributes;g.id=b.id,e.resolve(g)}return e.promise}function c(a){var b=a.attributes;b.id=a.id,e.resolve(b)}function d(a,b){e.resolve({user:a,error:b})}var e=a.defer();return{getUser:b}}angular.module("profile").factory("profileFactory",["$q",a])}(),function(a,b){var c=function(){var c,d=b(a.documentElement),e=b(a.body);return d.scrollTop()?d:(c=e.scrollTop(),e.scrollTop(c+1).scrollTop()==c?d:e.scrollTop(c))}();b.fn.smoothScroll=function(a){return a=~~a||400,this.find('a[href*="#"]').click(function(d){var e=this.hash,f=b(e);location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname&&f.length&&(d.preventDefault(),c.stop().animate({scrollTop:f.offset().top},a,function(){location.hash=e}))}).end()}}(document,jQuery);