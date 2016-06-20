(function(){

	var app = angular.module('App');

	var i_debug = true;

	if (i_debug) {
		var i_json = 'http://localhost:3000/';
		var i_services = './services/';
		var i_views = './views/';
		var i_directives = './directives/';
		var i_BackServices = './backServices/';
	}
	else{		
		var i_json = 'http://688b3655.ngrok.io/';
		var i_services = './services/';
		var i_views = './views/';
		var i_directives = './directives/';
		var i_BackServices = './backServices/';
	}


	app.constant('K_CONST', {
								debug:			 i_debug,
								urlJson: 		 {
													url: 	 './jsonData/db.json',
													db:		 i_json,
													user:	 i_json + 'user',
													rol:	 i_json + 'rol',
													userrol: i_json + 'user-rol'
												 },
								urlServices: 	 {
													url: 			 i_services,
													consumirHttp:	 i_services + 'consumirHttp.js',
													sessionHandler:	 i_services + 'sessionHandler.js',
													sessionVariable: i_services + 'sessionVariable.js'
												 },
								urlViews: 		 {
													url: 		i_views,
													navbar: 	i_views + 'navbar.html', 
													form: 		i_views + 'form.html', 
													bienvenido: i_views + 'bienvenido.html', 
													footer: 	i_views + 'footer.html'
												 },
								urlDirectives:   {
													url: 		i_directives,
													directives:	i_directives + 'directives.js'
												 },
								urlBackServices: {
													url: 		i_BackServices,
													backService: i_BackServices + 'backService'
												 }
							} 
				);

})(angular)