(function(){

	var app = angular.module('App');

	app.controller('userviewCtrl',['K_CONST', '$state',

		function(K_CONST, $state){

      iCtrl = this;

      iCtrl.name = "dario pepper";

      iCtrl.evento = [
                        {'id':0, 'name': 'Seleccione Evento' },
                        {'id':1, 'name': 'Circo' },
                        {'id':2, 'name': 'Paseo' },
                        {'id':3, 'name': 'Fútbol' },
                        {'id':4, 'name': 'Cine' },
                        {'id':5, 'name': 'Teatro' }
                     ];

      iCtrl.eventoSelected = iCtrl.evento[0];

      iCtrl.eventoFecha = [
                        {'id':0, 'data': 'Seleccione Fecha Disponible' },
                        {'id':1, 'data': '3/8/2016' },
                        {'id':2, 'data': '8/8/2016' },
                        {'id':3, 'data': '12/8/2016' },
                        {'id':4, 'data': '13/8/2016' },
                        {'id':5, 'data': '17/8/2016' },
                        {'id':6, 'data': '22/8/2016' },
                        {'id':7, 'data': '28/8/2016' }
                     ];

      iCtrl.eventoFechaSelected = iCtrl.eventoFecha[0];

      console.log(iCtrl.evento);

		}
	])

})(angular)
