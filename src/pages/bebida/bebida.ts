//Componentes
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Pages
import { PedidosPage } from '../pedidos/pedidos';
import { CarrinhoPage } from '../carrinho/carrinho';
import { DetalhePage } from '../detalhe/detalhe';
import { AdicionarItemPage } from '../adicionar-item/adicionar-item';

//Providers
import { ApiProvider } from '../../providers/api/api';
import { FuncoesProvider } from '../../providers/funcoes/funcoes';

@Component({
  selector: 'page-bebida',
  templateUrl: 'bebida.html'
})

export class BebidaPage {
  public refrigerante = [];
  public cha = []
  public suco = [];
  
  constructor(public navCtrl: NavController, public api: ApiProvider, public Funcoes: FuncoesProvider) {
    this.api.obterProdutosAPI().subscribe((db)  => {
      this.refrigerante = db.refrigerantes;
      this.cha = db.cha;
      this.suco = db.suco;
    });
  }
  
    addCarrinho(x) { // Adiciona um item ao carrinho e exibe um TOAST de confirmação
      if (x.versoes.length > 1) {
         this.navCtrl.push(AdicionarItemPage, {Item: x});
      }  else {
        this.Funcoes.compra(x);
      }
    }

     verDetalheProd(x) {
      this.navCtrl.push (DetalhePage, {Produto: x});
    }

     carrinhoPage() { // Abre CarrinhoPage com a array carrinho como parametro
      this.navCtrl.push(CarrinhoPage);
    }

    confirmaCompra() { // Exibe um ALERT de confirmação do efetuamento do pedido
      this.Funcoes.confirmaCompra();
    }
}
