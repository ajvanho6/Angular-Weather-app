//CONTROLERS

myApp.controller('mainControler', ['$scope','$resource','$location','wService', function($scope,$resource,$location,wService){
	
	$scope.city= wService.city;
	$scope.$watch('city',function(){
		 wService.city=$scope.city;
	});

	$scope.sub=function(){
		$location.path("/forecast");
	};

}]);


myApp.controller('forecastControler', ['$scope','$resource','$routeParams','wService', function($scope,$resource,$routeParams,wService){
	
	$scope.days = $routeParams.days || '3';

	$scope.city = wService.city;

	$scope.url = "http://openweathermap.org/img/w/";
	
	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=cf161d08a9b26caf3e7555aa70fa1ec5",{
		callback:"JSON_CALLBACK"}, {get:{method:"JSONP"}});

	$scope.weatherResults=$scope.weatherAPI.get({q:$scope.city, cnt:$scope.days});
		
		console.log($scope.weatherResults);

	// API key cf161d08a9b26caf3e7555aa70fa1ec5
	
	
	$scope.convertDate=function(dateResult){
		return new Date(dateResult * 1000);
	}

	$scope.convertTemp=function(temp){
		return Math.round(temp - 273.15)+' C';
	}

}]);