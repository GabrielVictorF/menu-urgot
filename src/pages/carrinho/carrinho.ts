import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanchePage } from '../lanche/lanche';
import { BebidaPage } from '../bebida/bebida';
import { AdicionarItemPage } from '../adicionar-item/adicionar-item';
import { CarrinhoProvider } from '../../providers/carrinho/carrinho';
import { EditarPage } from '../editar/editar';
 
import {FuncoesProvider} from '../../providers/funcoes/funcoes';
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

  constructor(public carProvider: CarrinhoProvider,public navCtrl: NavController, public navParams: NavParams,
    public Funcoes: FuncoesProvider) {
  }
  
  private carrinho = this.carProvider.carrinho;
  private carrinho_vazio : boolean;

  ionViewDidLoad() {
   	if(this.carProvider.carrinhoVazio()) {
   		this.carrinho_vazio = true;
   		console.log(this.carrinho_vazio);
   	} else {
   		this.carrinho_vazio = false;
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

  editarItem(x) {
    const index = this.carrinho.indexOf(x);
    this.navCtrl.push(EditarPage, {Item: x, Index: x});
  }

  confirmaCompra(){
    this.Funcoes.confirmaCompra();
  }
}

