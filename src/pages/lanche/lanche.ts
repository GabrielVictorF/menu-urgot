import { Component } from '@angular/core';
<<<<<<< HEAD
import { Http, RequestOptions, Headers } from '@angular/http';
import { AlertController, ToastController, NavController } from 'ionic-angular';
import { CarrinhoPage } from '../carrinho/carrinho';
=======
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController, ToastController } from 'ionic-angular';
import {PedidosPage} from '../pedidos/pedidos';
import{CarrinhoPage} from '../carrinho/carrinho';
>>>>>>> 903e0d0d209e1c322a4d35816844d8d0b6185241
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
		this.obterProdutosAPI(); // Assim que entra na page obtem os produtos
  	} 

  	erroAPI(req) { // Ao ocorrer erro ao obter os dados exibe um ALERT de erro
  		this.alertCtrl.create({
			title: 'Falha na conexão',
			buttons: [{ text: 'Estou ciente' }],
			subTitle: 'Não foi possível obter a lista de produtos [' + req + ']. Tente mais tarde.'
		}).present();
  	}
<<<<<<< HEAD

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
		}
    	confirm.present();
  }
=======
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
>>>>>>> 903e0d0d209e1c322a4d35816844d8d0b6185241

	showToast(position: string, text: string) { // Mostra um TOAST na tela
    	let toast = this.toastCtrl.create({
    		message: text,
      		duration: 2000,
      		position: position,
      		cssClass: 'toast'
    	});
    toast.present(toast);
  }

<<<<<<< HEAD
  	addCarrinho(x) { // Adiciona um item ao carrinho e exibe um TOAST de confirmação
  		let prompt = this.alertCtrl.create({
    	title: 'Confirmar compra',
      	message: "Informe a quantidade",
      	inputs: [
=======
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
>>>>>>> 903e0d0d209e1c322a4d35816844d8d0b6185241
        {
          	name: 'qtd',
          	type: 'number',
          	placeholder: 'Quantidade...'
        },
      ],
      buttons: [
        {
          	text: 'Cancelar',
        },
        {
          	text: 'Adicionar',
          	handler: data => {
          		if (data.qtd != 0) {
          			x.qtd = data.qtd;
            		this.carrinho.push(x);
           			this.showToast('top',  x.nome + ' foi inserido no carrinho!');
           			console.log(this.carrinho);
          	} else {
          			this.showToast('middle', 'Quantidade Inválida.');
          			this.addCarrinho(x);
          	}
          }
        }
      ]
    });
    prompt.present();
  }

  	carrinhoPage() { // Abre CarrinhoPage com a array carrinho como parametro
  		this.navCtrl.push(CarrinhoPage, { Carrinho: this.carrinho});
  	}

<<<<<<< HEAD
  	confirmaCompra() { // Exibe um ALERT de confirmação do efetuamento do pedido
  		this.showConfirm('Confirmar compra', 'Deseja efetuar esta compra?');
  		let body = JSON.stringify(this.carrinho);
    	let headers = new Headers({'Content-Type': 'application/json'});
    	let options = new RequestOptions({ headers: headers });

    	this.http.post('https://my-json-server.typicode.com/gabrielprogammer/api-fake/pedidos', body, options)
        .map(res => res.json())
        .toPromise()
        .then(response => {
        					console.log('Compra efetuada');
                            console.log(response);
                          }
        );
      
  }

	obterProdutosAPI(){ // Obtém os produtos da API do GITHUB
=======
      confirmaCompra() {
      this.showConfirm('Confirmar compra', 'Deseja efetuar esta compra?');
    }

    
	 //AdicionaPedido(){
  //  this.navCtrl.push(PedidosPage);
//  }
	obterProdutosAPI(){
>>>>>>> 903e0d0d209e1c322a4d35816844d8d0b6185241
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
