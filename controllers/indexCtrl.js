(function(){

	var app = angular.module('App');

	app.controller('indexCtrl',['K_CONST', '$state',

		function(K_CONST, $state){

			var iCtrl = this;

			iCtrl.debug = K_CONST.debug;

			iCtrl.$state = $state;

		}
	])

})(angular)
