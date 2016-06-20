(function(){

	var app = angular.module('App');

	app.controller('indexCtrl',['K_CONST', '$state',

		function(K_CONST, $state){

			var iCtrl = this;

			iCtrl.debug = K_CONST.debug

			iCtrl.$state = $state;

			//console.log(iCtrl.$state.$current.self);

			//default views
			/*
			iCtrl.segments = {
								"navbar": 		{"url": K_CONST.urlViews.navbar,		"visible":1},
								"form":			{"url": K_CONST.urlViews.form,			"visible":0},
								"bienvenido": 	{"url": K_CONST.urlViews.bienvenido,	"visible":1},
								"footer": 		{"url": K_CONST.urlViews.footer,		"visible":1},
								"modalLogin":	{"url": K_CONST.urlViews.modalLogin,	"visible":1}
							 }
			*/
		}
	])

})(angular)