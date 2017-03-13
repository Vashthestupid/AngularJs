
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
  $routeProvider
      .when('/', {templateUrl : 'partials/home.html', controller: 'PostCtrl'})
      .when('/comments/:id', {templateUrl : 'partials/comments.html', controller: 'CommentCtrl'})
      .otherwise({redirecTo : '/'})
});
