(function(){

	var app = angular.module('App');

	app.config(function($stateProvider, $urlRouterProvider, K_CONST){

		$urlRouterProvider.otherwise("/bienvenido");

    	$stateProvider
		    .state('bienvenido', {
		        url: "/bienvenido",
		        //templateUrl: K_CONST.urlViews.bienvenido
		        templateUrl: K_CONST.urlViews.bienvenido
		    })

		$stateProvider
		    .state('form', {
		        url: "/form",
		        //templateUrl: K_CONST.urlViews.bienvenido
		        templateUrl: K_CONST.urlViews.form
		    })
	})

})(angular)