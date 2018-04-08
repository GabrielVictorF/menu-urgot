import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AlertController, ToastController, NavController } from 'ionic-angular';
import { CarrinhoPage } from '../carrinho/carrinho';
import { DetalhePage } from '../detalhe/detalhe';
import { AdicionarItemPage } from '../adicionar-item/adicionar-item';

import 'rxjs/add/operator/map';

@Component({
	selector: 'page-lanche',
	templateUrl: 'lanche.html'
})

export class LanchePage {
	public sanduiches = [];
	public pasteis = [];
	public carrinho = new Array<any>();
  public compra;

	constructor(public navCtrl: NavController, private http: Http, private alertCtrl: AlertController, public toastCtrl : ToastController) {
 		
  	}

	ionViewWillEnter(){
		this.obterProdutosAPI(); // Assim que entra na page obtem os produtos
  	} 

  	erroAPI(req) { // Ao ocorrer erro ao obter os dados exibe um ALERT de erro
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
	      		buttons: [{
	          		text: 'Não',
	          		handler: () => {
	            		console.log('Disagree clicked');
	          	}
       			},
        		{
          			text: 'Sim',
         			handler: () => {
            		this.showToast('bottom', 'Compra efetuada');
          		}
        		}]
    		});
          confirm.present();
		}
  }

	showToast(position: string, text: string) { // Mostra um TOAST na tela
    	let toast = this.toastCtrl.create({
    		message: text,
      		duration: 2000,
      		position: position,
      		cssClass: 'toast'
    	});
    toast.present(toast);
  }

  	addCarrinho(x) { // Adiciona um item ao carrinho e exibe um TOAST de confirmação
      this.navCtrl.push(AdicionarItemPage, {Item: x});
    }

  	carrinhoPage() { // Abre CarrinhoPage com a array carrinho como parametro
  		this.navCtrl.push(CarrinhoPage, { Carrinho: this.carrinho});
  	}

     verDetalheProd(x) {
      this.navCtrl.push (DetalhePage, {Produto: x});
    }

  	confirmaCompra() { // Exibe um ALERT de confirmação do efetuamento do pedido
  		this.showConfirm('Confirmar compra', 'Deseja efetuar esta compra?');
      console.log('DEBUG');


      this.compra = this.carrinho;
      console.log(this.compra);
  		    let body = JSON.stringify(this.carrinho);
  		        let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  		this.http.post('http://localhost:3000/pedidos/', body, options)
  		.map(res => res.json())
	  	.toPromise()
	  	.then(
	  		response => 
	  			console.log(response)	
	  	);
			/*et body = JSON.stringify(this.carrinho);
			let headers = new Headers({ 'Content-Type': 'application/json' });
			let options = new RequestOptions({ headers: headers });

			this.http.post('https://my-json-server.typicode.com/gabrielprogammer/api-fake/pedidos', body, options)
				.map(res => res.json())
				.toPromise()
				.then(response => {
					console.log('Compra efetuada');
					console.log(response);
				}
				);*/
      
  }
    
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
