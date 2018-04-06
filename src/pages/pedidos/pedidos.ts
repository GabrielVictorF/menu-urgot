import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController, LoadingController } from 'ionic-angular';
import { LanchePage } from '../lanche/lanche';
import {PedidoPage} from '../pedido/pedido';
import {CadastrapedidoPage} from '../cadastrapedido/cadastrapedido'; 
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-pedidos',
	templateUrl: 'pedidos.html'
})

export class PedidosPage {
	pedidos = [];

load;
	
	constructor(public navCtrl: NavController, private http: Http, public alertCtrl: AlertController, private loader : LoadingController) {
  	
  	//this.load = this.loader.create({
      //content: "Buscando pedidos. Aguarde ...",
  	//});

  	//this.load.present();

  	}

  	ionViewWillEnter(){
		this.obterPedidosAPI();
		console.log(this.pedidos);
  	}

  	selecionapedidos(x) {
    console.log(x);
    this.navCtrl.push(PedidoPage, { pedidoSelecionado : x } );
  }
  	adicionarpedido(){
  	console.log('Adicionando pedido ...');
    this.navCtrl.push(CadastrapedidoPage);
  	} 
  	 obterpedidosAPI() {
    this.http.get('http://localhost:3000/pedidos')
        .map(response => response.json())
        .toPromise()
        .then(
                response => 
                {
                  this.pedidos = response;
                  console.log(response);
                  console.log(this.pedidos);
                  this.load.dismiss();
                },
              
                err => {
                  this.load.dismiss(); 
                  this.alertCtrl.create({
                      title: 'Falha na conexão!',
                      buttons: [{ text: 'Estou ciente' }],
                      subTitle: 'Não foi possível obter a lista de pedidos. Tente mais tarde.' 
                  }).present();
          
                });
  }

  	 AdicionarPedido(){
    this.navCtrl.push(LanchePage);
  }

	erroAPI(req) {
  		this.alertCtrl.create({
			title: 'Falha na conexão',
			buttons: [{ text: 'Estou ciente' }],
			subTitle: 'Não foi possível obter a lista de produtos [' + req + ']. Tente mais tarde.'
		}).present();
  	}

  	obterPedidosAPI() {
  		this.http.get('http://localhost:3000/pedidos') //Dados dos PEDIDOS
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
