import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController, ToastController } from 'ionic-angular';
import {PedidosPage} from '../pedidos/pedidos';
import{CarrinhoPage} from '../carrinho/carrinho';
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-lanche',
	templateUrl: 'lanche.html'
})

export class LanchePage {
	public sanduiches = [];
	public pasteis = [];
	public carrinho = new Array<any>();
	//{
	//	produto: [],
//		qtd: []
//	}

	constructor(public navCtrl: NavController, private http: Http, private alertCtrl: AlertController, public toastCtrl : ToastController) {
 		
  	}

	ionViewWillEnter(){
		this.obterProdutosAPI();
  	} 

  	erroAPI(req) {
  		this.alertCtrl.create({
			title: 'Falha na conexão',
			buttons: [{ text: 'Estou ciente' }],
			subTitle: 'Não foi possível obter a lista de produtos [' + req + ']. Tente mais tarde.'
		}).present();
  	}
 showConfirm(title: string, text: string) {
      if (this.carrinho.length ==  0) {
        this.showToast('middle', 'Carrinho vazio');
        return;
      }
      else {
    let confirm = this.alertCtrl.create({
      title: title,
      message: text,
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
            this.showToast('bottom', 'Compra efetuada');
          }
        }
      ]
    });
}
   // confirm.present();
  }
  	showToast(position: string, text: string) {
    	let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  	addCarrinho(x) {
  		//parseInt(this.carrinho.qtd);
  		//this.carrinho.produto.push(x.nome);
  		//this.carrinho.qtd.push(2);
  		//console.log(this.carrinho);
  	//}
  	let prompt = this.alertCtrl.create({
      title: 'Confirmar compra',
      message: "Informe a quantidade",
      inputs: [
        {
          name: 'qtd',
          placeholder: 'Quantidade...'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Adicionar',
          handler: data => {
            console.log('Saved clicked');
            this.carrinho.push(x);
           	this.showToast('top',  x.nome + ' foi inserido no carrinho!');
           	console.log(this.carrinho);
          }
        }
      ]
    });
    prompt.present();
  }

  	carrinhoPage() {
  		this.navCtrl.push(CarrinhoPage, { Carrinho: this.carrinho});
  	}

      confirmaCompra() {
      this.showConfirm('Confirmar compra', 'Deseja efetuar esta compra?');
    }

    
	 //AdicionaPedido(){
  //  this.navCtrl.push(PedidosPage);
//  }
	obterProdutosAPI(){
		this.http.get('https://my-json-server.typicode.com/gabrielprogammer/api-fake/sanduiche') //Dados dos SANDUÍCHES
	  	.map(response => response.json())
	  	.toPromise()
	  	.then(
	 		response => {
	   			this.sanduiches = response;
			},

			err => {
		  		this.erroAPI('Sanduíches');
		});

  		this.http.get('https://my-json-server.typicode.com/gabrielprogammer/api-fake/pasteis') //Dados dos PASTEIS
	 		.map(response => response.json())
			.toPromise()
			.then(
				response => {
					this.pasteis = response;
				},

		 		err => {
		 			this.erroAPI('Pastéis');
			});
	}
}
