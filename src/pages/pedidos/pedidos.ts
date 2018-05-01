import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController, LoadingController } from 'ionic-angular';
import { LanchePage } from '../lanche/lanche';
import 'rxjs/add/operator/map';

import { CarrinhoProvider } from '../../providers/carrinho/carrinho'

import { PedidoDetalhePage } from '../pedido-detalhe/pedido-detalhe';

@Component({
	selector: 'page-pedidos',
	templateUrl: 'pedidos.html'
})

export class PedidosPage {
	public pedidos = [];

	constructor(public carProvider: CarrinhoProvider,
    public navCtrl: NavController, private http: Http, 
    public alertCtrl: AlertController, 
    private loader : LoadingController) {
  	
  	//this.load = this.loader.create({
      //content: "Buscando pedidos. Aguarde ...",
  	//});

  	//this.load.present();

  	}

  	ionViewWillEnter(){
		  this.pedidos = this.carProvider.pedidos;
		  console.log(this.pedidos);
  	}

    pedidoDetalhe(x) {
      this.navCtrl.push(PedidoDetalhePage, {pedidoSelecionado: x});
    }

  	selecionapedidos(x) {
    console.log(x);
    this.navCtrl.push(PedidosPage, { pedidoSelecionado : x } );
  }	
}
