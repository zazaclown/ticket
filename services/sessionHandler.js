(function(){

	var app = angular.module('App');

	app.service('sessionHandler', ['consumirHttp', 'K_CONST',

		function(consumirHttp, K_CONST){

			miSH = this;

			miSH.init = false;

			miSH.iniciarSesion = function(params){

				return consumirHttp.consumir(K_CONST.urlJson.user + '?login_like=' + params.user + '&pass_like=' + params.pass);

			}

			miSH.obtenerUserRol = function(params){

				return consumirHttp.consumir(K_CONST.urlJson.userrol + '?idUser=' + params.idUser );

			}


			miSH.cerrarSesion = function(){

			}

		}
	]);

})(angular)
