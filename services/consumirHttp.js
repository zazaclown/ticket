(function(){

	var app = angular.module('App');

	app.service('consumirHttp', function($http){

		mihelperHttp = this;

		mihelperHttp.consumir = function(url,params){

			var httpObject = { url: url, method: 'GET',params : params };
        	
        	return promise = $http(httpObject);

		}
		
	});

})(angular)