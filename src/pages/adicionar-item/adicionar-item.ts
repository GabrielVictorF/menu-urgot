//Components
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

//Pages
import { CarrinhoPage } from '../carrinho/carrinho';

//Providers
import { CarrinhoProvider } from '../../providers/carrinho/carrinho';
import {FuncoesProvider} from '../../providers/funcoes/funcoes';

@IonicPage()
@Component({
	selector: 'page-adicionar-item',
  	templateUrl: 'adicionar-item.html',
})

export class AdicionarItemPage {
	constructor(public carProvider: CarrinhoProvider, public Funcoes: FuncoesProvider,
				public navCtrl: NavController, public navParams: NavParams, 
				private alertCtrl: AlertController) {
  }
	
    public Item = this.navParams.get('Item');
  	
    ionViewDidLoad() {
		console.log('ionViewDidLoad AdicionarItemPage');	
  	}

  	compra(version) {
		  this.Funcoes.compra(this.Item, version);
  	}
  	
  	 carrinhoPage() { // Abre CarrinhoPage com a array carrinho como parametro
      this.navCtrl.push(CarrinhoPage);
    }

    confirmaCompra() { // Exibe um ALERT de confirmação do efetuamento do pedido
  		this.Funcoes.confirmaCompra();
  	}
}
