"use strict";function Router(t,o){t.state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}),o.otherwise("/")}function Auth(t){t.loginUrl="/login",t.signupUrl="/register",t.tokenPrefix=""}function LoginController(t,o){function n(){t.login(r.credentials).then(function(){o.go("profileIndex")})}function e(o){t.authenticate(o).then(function(t){console.log(t)})}var r=this;r.credentials={},r.submit=n,r.authenticate=e}function LinesController(t){function o(){t.get("/status").then(function(t){console.log(t)}).catch(function(t){console.log(t)})}o()}function TwitterController(t){function o(){t.get("/tweets").then(function(t,o){return o?void console.log("Something went wrong, run away from ",o):(n.all=t.data.statuses,void console.log(n.all))})}var n=this;n.all=[],o()}angular.module("twitterForLondon",["ngResource","ui.router","satellizer"]).config(Router).config(Auth),Router.$inject=["$stateProvider","$urlRouterProvider"],Auth.$inject=["$authProvider"],angular.module("twitterForLondon").controller("LoginController",LoginController),LoginController.$inject=["$auth","$state"],angular.module("twitterForLondon").controller("LinesController",LinesController),LinesController.$inject=["$http"],angular.module("twitterForLondon").controller("TwitterController",TwitterController),TwitterController.$inject=["$http"];
//# sourceMappingURL=app.js.map