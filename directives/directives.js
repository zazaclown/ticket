(function(){

	var app = angular.module('App');

	app.directive('dNavbar', function(K_CONST) {
		return {
			restrict: 'E',
			scope: {},
			replace: true,
			templateUrl: K_CONST.urlViews.navbar,
			controller: 'navbarCtrl as navctrl'
		};
	});


	app.directive('dFooter', function(K_CONST) {
		return {
			restrict: 'E',
			scope: {},
			replace: true,
			templateUrl: K_CONST.urlViews.footer
		};
	});

})(angular)

