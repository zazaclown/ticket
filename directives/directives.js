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

	app.directive('dAdminsidebar', function(K_CONST) {
		return {
			restrict: 'E',
			scope: {},
			replace: true,
			templateUrl: K_CONST.urlViews.adminsidebar
		};
	});

	app.directive('dAdminbody', function(K_CONST) {
		return {
			restrict: 'E',
			scope: {},
			replace: true,
			// templateUrl: K_CONST.urlViews.adminbody
			templateUrl: './views/adminbody.html'
		};
	});

	app.directive('dUserbody', function(K_CONST) {
		return {
			restrict: 'E',
			scope: {},
			replace: true,
			templateUrl: K_CONST.urlViews.userbody
		};
	});

})(angular)
