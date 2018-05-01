//Componentes
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
import { CarrinhoPage } from '../carrinho/carrinho';
import { AdicionarItemPage } from '../adicionar-item/adicionar-item';

//Providers
import { FuncoesProvider } from '../../providers/funcoes/funcoes';

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {
    constructor(public navCtrl: NavController, public navParams: NavParams, public Funcoes: FuncoesProvider) {
    }
    
    private produto = this.navParams.get('Produto');
    
    ionViewDidLoad() { //Só pra fins de debug
        console.log('ionViewDidLoad DetalhePage');
        console.log(this.produto);
    }

    addCarrinho(x) { // Chama "AdicionarItemPage" com o item passado como parametro
        this.navCtrl.push(AdicionarItemPage, {Item: x});
    }

    carrinhoPage() { // Abre CarrinhoPage com a array carrinho como parametro
        this.navCtrl.push(CarrinhoPage);
    }

    confirmaCompra() { // Exibe um ALERT de confirmação do efetuamento do pedido
        this.Funcoes.confirmaCompra();
    }
}
