import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
 
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-pedidos',
	templateUrl: 'pedidos.html'
})

export class PedidosPage {
	pedidos = [];

	constructor(public navCtrl: NavController, private http: Http, public alertCtrl: AlertController) {
  	
  	}

  	ionViewWillEnter(){
		this.obterPedidosAPI();
  	} 

	erroAPI(req) {
  		this.alertCtrl.create({
			title: 'Falha na conexão',
			buttons: [{ text: 'Estou ciente' }],
			subTitle: 'Não foi possível obter a lista de produtos [' + req + ']. Tente mais tarde.'
		}).present();
  	}

  	obterPedidosAPI() {
  		this.http.get('http://192.168.0.7:3000/pedidos') //Dados dos PASTEIS
	 		.map(response => response.json())
			.toPromise()
			.then(
				response => {
					this.pedidos = response;
					console.log(response)
				},

		 		err => {
		 			this.erroAPI('Pedidos');
				}
			);
  	}
}
