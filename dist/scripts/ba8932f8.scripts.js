!function(){"use strict";function a(a){console.log(a),this.isAuth=function(){return console.log("test"),!0}}function b(a){a.when("/",{controller:"MainController",templateUrl:"views/main.html",controllerAs:"main"}).otherwise({redirectTo:"/"})}angular.module("philosAngularApp",["ngRoute","login"]).config(["$routeProvider",b]).controller("MainController",["CurrentUser",a])}(),angular.module("philosAngularApp").constant("CurrentUser",{}),function(){"use strict";function a(a){a.when("/login",{controller:"LoginController",controllerAs:"auth",templateUrl:"views/login.html"})}angular.module("login",[]).config(["$routeProvider",a])}(),function(){"use strict";function a(a){function b(){return a.post("/login")}return{login:b}}angular.module("philosAngularApp").factory("loginFactory",["$http",a])}(),function(){"use strict";function a(a,b){({email:this.email,password:this.password,remember:this.remember});this.login=function(c){b.login(c).then(function(b){console.log(b),a=b,window.CurrentUser=b})}}angular.module("login").controller("LoginController",["CurrentUser","loginFactory",a])}();