var app = angular.module('saorsaApp', ['ngRoute']);

app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/home',{
        templateUrl : 'views/home.html',
        controller  : 'homeController'
    }) 
    .when('/signup',{
        templateUrl : 'views/signup.html',
        controller  : 'signupController'
    }) 
    .when('/login',{
        templateUrl : 'views/login.html',
        controller  : 'loginController'
    }) 
    .otherwise({
        redirectTo: '/home'
    });
});
