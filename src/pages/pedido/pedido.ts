import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {
public pedidos;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http ) {
  this.pedidos = navParams.get ('pedidoSelecionado');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }

}
