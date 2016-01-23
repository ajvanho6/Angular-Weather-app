//ROUTING

myApp.config(function($routeProvider){
	
	$routeProvider

	.when('/',{
		templateUrl:'pages/home.html',
		controller:'mainControler'	
	})
	.when('/forecast',{
		templateUrl:'pages/forecast.html',
		controller:'forecastControler'
	})
	.when('/test',{
		templateUrl:'pages/test.html',
		controller:'forecastControler'
	})
	.when('/forecast/:days',{
		templateUrl:'pages/forecast.html',
		controller:'forecastControler'
	})
	.otherwise({redirectTo:'/'})
	

});