"use strict";function Router(e,t){e.state("usersIndex",{url:"/users",templateUrl:"/templates/usersIndex.html",controller:"UsersIndexController as user"}).state("linesIndex",{url:"/lines",templateUrl:"/templates/linesIndex.html",controller:"LinesIndexController as linesIndex"}).state("linesShow",{url:"/lines/:tflId",templateUrl:"/templates/linesShow.html",controller:"LinesShowController as linesShow"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}),t.otherwise("/lines")}function Auth(e){e.loginUrl="/login",e.signupUrl="/register",e.tokenPrefix="",e.facebook({clientId:"360279380977935"}),e.twitter({clientId:"799262881887961088-otHdpAYsUtsIQY1LaY96TY3jMywiFQI"})}function RegisterController(e,t){function n(){e.signup(r.user).then(function(){t.go("login")})}var r=this;r.user={},r.submit=n}function LoginController(e,t){function n(){e.login(o.credentials).then(function(){t.go("linesIndex")})}function r(t){e.authenticate(t).then(function(e){console.log(e)})}var o=this;o.credentials={},o.submit=n,o.authenticate=r}function LinesIndexController(e){var t=this;t.all=[],e.getStatuses().then(function(e){t.all=e})}function LinesShowController(e,t,n){function r(){t({method:"GET",url:"/tweets",params:{q:n.params.tflId}}).then(function(e,t){return t?void console.log("Something went wrong, run away from ",t):(o.tweets=e.data.statuses,void console.log(o.tweets))})}var o=this;o.tweets=[],e.getStatuses().then(function(e){o.line=e.filter(function(e){return e.tflId===n.params.tflId})[0]}),r()}function TFL(e){function t(){return e.get("/status").then(function(e){return e.data})}this.getStatuses=t}function User(e){return new e("/users/:id",{id:"@_id"},{update:{method:"PUT"}})}function UsersIndexController(e){var t=this;t.all=e.query()}angular.module("twitterForLondon",["ngResource","ui.router","satellizer","ngSanitize"]).config(Router).config(Auth),Router.$inject=["$stateProvider","$urlRouterProvider"],Auth.$inject=["$authProvider"],angular.module("twitterForLondon").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("twitterForLondon").controller("LinesIndexController",LinesIndexController).controller("LinesShowController",LinesShowController),LinesIndexController.$inject=["TFL"],LinesShowController.$inject=["TFL","$http","$state"],angular.module("twitterForLondon").service("TFL",TFL),TFL.$inject=["$http"],angular.module("twitterForLondon").factory("User",User),User.$inject=["$resource"],angular.module("twitterForLondon").controller("UsersIndexController",UsersIndexController),UsersIndexController.$inject=["User"];
//# sourceMappingURL=app.js.map
