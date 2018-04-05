import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanchePage } from '../lanche/lanche';

/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private carrinho = this.navParams.get('Carrinho');
  private carrinho_vazio : boolean;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
   	if(this.carrinho != '') {
   		this.carrinho_vazio = false;
   		console.log(this.carrinho_vazio);
   	} else {
   		this.carrinho_vazio = true;
   		console.log(this.carrinho_vazio);
   	}
  }

  private abrirHome() {
  	this.navCtrl.push(LanchePage);
  }

  removerItem(x) {
  	const index = this.carrinho.indexOf(x);
  	this.carrinho.splice(index, 1);
  }
}
