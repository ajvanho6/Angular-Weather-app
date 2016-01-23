myApp.directive('weatherReport',function(){
	
	return{
		restrict:'E',
		templateUrl:'directives/weatherday.html',
		replace:true,
		scope:{
			formatDate:'@',
			weatherDay:'=',
			convertTemperature:'&',
			convertDateu:'&',
			

		}
	}
});