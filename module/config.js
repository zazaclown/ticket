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

		    .state('userview', {
		        url: "/userview",
		        //templateUrl: K_CONST.urlViews.bienvenido
		        templateUrl: K_CONST.urlViews.userview
		    })

		    .state('adminview', {
		        url: "/adminview",
		        //templateUrl: K_CONST.urlViews.bienvenido
		        templateUrl: K_CONST.urlViews.adminview
		    })

	})

})(angular)
