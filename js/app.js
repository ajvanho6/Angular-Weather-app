//jedina globalna varijabla koju imas u angularu.Dva parametra prima ime aplikacije i array of dependencies, gde dependencies pocinju ime sa ng 
//angular sluzi sa povezivanje view(html) i modula (js koda)
//angular koristi ng-nesto custom attribute i tako komunicira sa browserom
//depencency injection znaci da prosledis objekat funkciji, a ne da je pravis unutar te funkcije jednostavno je
//$scope je objekat od neceg sto se zove Scope service i to je objekat(service) koji nam daje angular modul 
//njega prosledjujemo funkciji znaci radimo dependancy injection
//mozes vise objekata istovremeno da prosledjujes odnosno dependency injection da radis
//tom objektu kasnije mozemo dodavati varijable metode i slicno.
//dakle preko scope je ustvari objekat koji vrsi komunikaciju js podtaka i onog dela htmla nad kome smo definisali controler
//u array of dependencies prosledjujes imena modula koje zelis da koristis u svojoj aplikaciji 
//to znaci odes na angularov sajt i tamo uzmes link (modula) koji hoces da koristis
//ubacis kao script ispod glavne angular scripte u html dokumentu i stavis ime u dependancy array i odna mozes da koristis taj modul
//ti moduli zatim imaju objekte(service) koje prosledis conntrolerima i imas njihove onda metode,funkcije i slicno

//var myApp = angular.module('myApp',['ngRoute']);

//controler isto naglasis u html Sve unutar tog html dela nad kojim je kontroler ce biti zahvaceno sa njim
//ovo ispod je prvi nacin kako radis dependency injection(prosledjujes objekte(servise modula) funkciji
//u ovom slucaju nije bitan redosled kojim prosledjujes objekte


/*

myApp.controller('mainControler', function($scope){

	$scope.name="Ivan";
	console.log($scope);
	
});

*/


//ispod je drugi nacin kako se radi dependency injection i ovaj nacin treba koristiti
//ovim nacinom je omoguceno kasnije da se minifikuje js code dok ako bi minifikovali kad bi na prvi nacin radili injection angular bi pukao
// dakle oko drugog parametra kontrolora (dakle funcije) stavljaju se array zagrade
//zatim ispred te funkcije u array-u, kao string elementi nabrajaju se svi objekti(servisi modula)
//ovde JESTE bitan redosled ubacivanja objekata
// na kom mestu ispred funkcije treba da bude na tom mestu i u funkciji


//-------------------//
//Interpolacija je ustavri kada spajas stringove i varijable primer:("my name is "+name)
//kao sto smo rekli $scope je objekat(service) koji komunicira izmedju viewa(htmla) i modula(js koda)
//znaci sve sto attachujemo na scope vidljivo je u htmlu i js tako je napisan taj objekat
//to znaci da varijable i funkcije vezane za scope su vidljive u htmlu kao primer dodamo varijablu name $scope
//zatim u htmlu {{name}} da bi je prikazali. Dakle duple curly zagrade i unutar ime varijable i onda se prikaze u htmlu

//-------------------//
//Directives je ustvari istrukcija angularu kako da manipulise delom DOM-a
//Direktive se pozivaju custom atributima koji su definisani unutra core angulara
//Jedan od tih cestih atributa je ng-model on omogucava two way binding
//odnossno upaduje se model time sto kucas u input html(view) updatujes varijablu handle(model) u ovom primeru
//zatim handle se menja u funkciji(model) i salje se nazad viewu dalle two way binding


/*
myApp.config(function($routeProvider) {
	
	$routeProvider

		.when('/',{
			templateUrl:'pages/first.html',
			controller:'mainControler'
		})

		.when('/second',{
			templateUrl:'pages/second.html',
			controller:'secondControler'
		})
});


myApp.controller('mainControler',['$scope', function($scope){

	
	$scope.name="Ivan Baresic";

	
/*
	$timeout(function(){
		$scope.name="Ivana Turanski";
	},3000);


	//two-way-binding example
	$scope.handle="";
	
	$scope.handleLower=function(){
		return $filter('lowercase')($scope.handle);
	}


}]);

myApp.controller('secondControler', ['$scope', function($scope){
	$scope.name="Second page";	

}]);


*/

//sigle page applications su zasnovane na konceptu ancora. npr <a href="#bookmarks"></a>
//prvo ce nas odvesti na deo stranice gde je postavljen id bookmarks kao skocice do tamo
//fazon je sto ovo mozemo da uhvatimo u javascriptu i kazemo ako je (zove se fragment indetifajer ovo) jednako necemu
//onda uradi nesto. recimo idi na taj deo stranice
// dakle mozemo tako da se krecemo na jednoj stranici bez potrebe da sakcemo na druge stranice i refrsujemo stranice u browseru
//i to je osanova na kome pocivaju single page apps
//ovo se sve radi sa Routing servisom. Prvo ga importujemo kao scriptu
//i zatim ukljucimo u array of dependencies


//CUSTOM DIRECTIVES
//Ovo znaci samo da pises direktive koje ce ti izbacivati delove sajta na primer, sve direktive
//vracaja java script objekat, dakle name and value parove, tako direktive objekti imaju 
//propertyije restrict gde nabrajas zna koje delove hoces da ogranicis direktivu koristis velika slova E(samo za elemente) itd
//zatim templateUrl(ovo je kao kod routinga princip) i tu navedes relativnu putanju do sadrzaja tvoje direktive(ove je najcesce html stanica
	//u posebnom folderu), zatim template to ako neces da stavljas u poseban folder nego direktno u tom app.js fajlu da napises direktivu
//replace prima dva parametra true i false stavis na true uvek da se browswer ili neki framework kao sto je boostrap ne buni



//--------------------------------Weather APP------------------------------------//

//MODULE

var myApp = angular.module('myApp',['ngRoute','ngResource']);


 










