//Componentes
import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AlertController, ToastController, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

//Pages
import { CarrinhoPage } from '../carrinho/carrinho';
import { DetalhePage } from '../detalhe/detalhe';
import { AdicionarItemPage } from '../adicionar-item/adicionar-item';

//Providers
import { FuncoesProvider} from '../../providers/funcoes/funcoes';
import { CarrinhoProvider } from '../../providers/carrinho/carrinho';
import { ApiProvider } from '../../providers/api/api';

@Component({
	selector: 'page-lanche',
	templateUrl: 'lanche.html'
})

export class LanchePage {
	public sanduiches = [];
	public pasteis = [];
  public carrinho = [];

	constructor(public Funcoes: FuncoesProvider, public carProvider: CarrinhoProvider, 
              public api: ApiProvider, public navCtrl: NavController, 
              private http: Http, private alertCtrl: AlertController, 
				      public toastCtrl : ToastController) {
     this.api.obterProdutosAPI().subscribe((db)  => {
      this.sanduiches = db.sanduiche;
      this.pasteis = db.pasteis;
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
