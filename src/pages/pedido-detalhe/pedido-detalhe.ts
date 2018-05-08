import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PedidoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido-detalhe',
  templateUrl: 'pedido-detalhe.html',
})
export class PedidoDetalhePage {
	public pedido;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.pedido = this.navParams.get('pedidoSelecionado');
  	console.log(this.pedido);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoDetalhePage');
  }

}
