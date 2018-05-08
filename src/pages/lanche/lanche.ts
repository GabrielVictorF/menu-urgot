//Componentes
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

//Pages
import { CarrinhoPage } from '../carrinho/carrinho';
import { DetalhePage } from '../detalhe/detalhe';
import { AdicionarItemPage } from '../adicionar-item/adicionar-item';

//Providers
import { FuncoesProvider} from '../../providers/funcoes/funcoes';
import { ApiProvider } from '../../providers/api/api';

@Component({
	selector: 'page-lanche',
	templateUrl: 'lanche.html'
})

export class LanchePage {
	public sanduiches = [];
	public pasteis = [];
  public carrinho = [];
  public coxinhas = [];
  public salgados = [];
  private load;

	constructor(public Funcoes: FuncoesProvider, public api: ApiProvider, 
                public navCtrl: NavController, private loadCtrl: LoadingController) {
    this.load = this.loadCtrl.create({
      content: 'Obtendo os lanches...'
    });
    this.load.present();
    
    this.api.obterProdutosAPI().subscribe((db)  => {
      this.load.dismiss();
      this.sanduiches = db.sanduiche;
      this.pasteis = db.pasteis;
      this.coxinhas = db.coxinhas;
      this.salgados = db.salgados;
    });
  }

    public informaMesa() {
        this.Funcoes.informaMesa();    
    }
    
  	addCarrinho(x) { // Adiciona um item ao carrinho e exibe um TOAST de confirmação
  		if (x.versoes.length != 1) { // Caso o item tenha mais de uma versão
  			 this.navCtrl.push(AdicionarItemPage, { Item: x});
  		}	else {
  			this.Funcoes.compra(x); // Chama a função de adicionar o item ao carrinho
  		} 
    }

    verDetalheProd(x) {
        this.navCtrl.push (DetalhePage, { Produto: x});
    }

    carrinhoPage() { // Abre CarrinhoPage com a array carrinho como parametro
        this.navCtrl.push(CarrinhoPage);
    }

  	confirmaCompra() { // Exibe um ALERT de confirmação do efetuamento do pedido
  		this.Funcoes.confirmaCompra();
  	}
}
