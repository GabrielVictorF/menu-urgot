import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarrinhoProvider } from '../../providers/carrinho/carrinho';

/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})

export class EditarPage {

	private Item = this.navParams.get('Item');
	private Index = this.navParams.get('Index'); ///Pra saber a posição do item selecionado
	
  	constructor(public navCtrl: NavController, public navParams: NavParams, public carProvider: CarrinhoProvider) {
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad EditarPage');
        console.log(this.Item);
        console.log(this.Index);
  	}

  	valorPadrao(version): boolean {
  		if (version == this.Item.versao) {
  			return true;
  		}
  		else {
  			return false;
  		}
  	}

  	editar(x) {
  		console.log(x);
  		//this.carProvider.carrinho[this.Index] = x;
  	}
}
