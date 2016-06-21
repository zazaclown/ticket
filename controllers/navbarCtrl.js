(function(){

	var app = angular.module('App');

	app.controller('navbarCtrl', ['$state', 'sessionHandler', 'sessionVariable',

		function($state, sessionHandler, sessionVariable){

			navctrl = this;

			navctrl.init = false;

			navctrl.sessionVariable = sessionVariable;

			navctrl.iniciarSesion = function(){

				sessionHandler.iniciarSesion( {"user":navctrl.user, "pass":navctrl.pass} )
					.then(function(response){

						if (response.data.length) {

							sessionVariable.setSessionUser(response.data[0].user);
							sessionVariable.setSessionLogin(response.data[0].login);
							sessionVariable.setSessionUserId(response.data[0].id);

							sessionHandler.obtenerUserRol( {"idUser": sessionVariable.getSessionUserId() } )
								.then(function(response){
									if (response.data.length) {
											sessionVariable.setSessionUserIdRol(response.data[0].idRol);
											navctrl.init = true;

											switch ( sessionVariable.getSessionUserIdRol() ) {
												case (1 || 2):
													$state.go('adminview');
													break;
												case 3:
													$state.go('userview');
													break;
												default:
													alert('Usuario con rol incorrecto');
													navctrl.init = false;
													break;
											}

									}
									else{
										alert('Usuario sin rol asignado');
										navctrl.init = false;
									}

							});
						}
						else{
							alert('Usuario o contraseña invalida');
							navctrl.init = false;
						}
					})
					.catch(function(reason){

						console.log(reason);
						alert('Usuario o contraseña invalida');
						navctrl.init = false;
					})

			}

			navctrl.registrarse = function(){
			}

			navctrl.cerrarSesion = function(){

				sessionVariable.setSessionUser(null);
				sessionVariable.setSessionLogin(null);
				sessionVariable.setSessionUserId(null);

				navctrl.user = null;
				navctrl.pass = null;

				navctrl.init = false;

				$state.go('bienvenido');

			}
		}
	]);

})(angular)
