(function(){

	var app = angular.module('App');

	app.controller('navbarCtrl', ['$state', 'sessionHandler', 'sessionVariable', 

		function($state, sessionHandler, sessionVariable){

			navctrl = this; 

			navctrl.init = false;

			navctrl.sessionVariable = sessionVariable;

			console.log(sessionHandler);

			navctrl.iniciarSesion = function(){
				
				sessionHandler.iniciarSesion( {"user":navctrl.user, "pass":navctrl.pass} )
					.then(function(response){

						if (response.data.length) {

							sessionVariable.setSessionUser(response.data[0].user);
							sessionVariable.setSessionLogin(response.data[0].login);
							sessionVariable.setSessionUserId(response.data[0].id);
							
							navctrl.init = true;
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

			}	
		}
	]);

})(angular)