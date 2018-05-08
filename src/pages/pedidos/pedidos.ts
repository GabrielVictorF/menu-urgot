//Componentes
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

//Pages
import { LanchePage } from '../lanche/lanche';
import { PedidoDetalhePage } from '../pedido-detalhe/pedido-detalhe';
import { CarrinhoPage } from '../carrinho/carrinho';

//Providers
import { CarrinhoProvider } from '../../providers/carrinho/carrinho'
import { FuncoesProvider } from '../../providers/funcoes/funcoes';

@Component({
	selector: 'page-pedidos',
	templateUrl: 'pedidos.html'
})

export class PedidosPage {
	public pedidos = [];

	constructor(public carProvider: CarrinhoProvider, public navCtrl: NavController,
                public Funcoes: FuncoesProvider) {
  
  }

  	ionViewWillEnter(){
		  this.pedidos = this.carProvider.pedidos;
  	}

    pedidoDetalhe(x) {
      this.navCtrl.push(PedidoDetalhePage, {pedidoSelecionado: x});
    }

  	selecionapedidos(x) {
    console.log(x);
    this.navCtrl.push(PedidosPage, { pedidoSelecionado : x } );
  }	

  carrinhoPage() { // Abre CarrinhoPage com a array carrinho como parametro
        this.navCtrl.push(CarrinhoPage);
    }

    confirmaCompra() { // Exibe um ALERT de confirmação do efetuamento do pedido
        this.Funcoes.confirmaCompra();
    }

    informaMesa() {
         this.Funcoes.informaMesa(); 
    }
}
