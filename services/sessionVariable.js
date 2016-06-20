(function(){
	var app = angular.module('App');

	app.service('sessionVariable', function(){

		miSessionVariable = this;

		miSessionVariable.setSessionUser = function(SessionUser){
			miSessionVariable.SessionUser =	SessionUser;		
		}

		miSessionVariable.getSessionUser = function(){
			return miSessionVariable.SessionUser;
		}

		miSessionVariable.setSessionUserId = function(SessionUserId){
			miSessionVariable.SessionUserId =	SessionUserId;		
		}

		miSessionVariable.getSessionUserId = function(){
			return miSessionVariable.SessionUserId;
		}

		miSessionVariable.setSessionUserIdRol = function(SessionUserIdRol){
			miSessionVariable.SessionUserIdRol =	SessionUserIdRol;		
		}

		miSessionVariable.getSessionUserIdRol = function(){
			return miSessionVariable.SessionUserIdRol;
		}

		miSessionVariable.setSessionLogin = function(SessionLogin){
			miSessionVariable.SessionLogin =	SessionLogin;		
		}

		miSessionVariable.getSessionLogin = function(){
			return miSessionVariable.SessionLogin;
		}
		
	})

})(angular)