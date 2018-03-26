import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';

@Component({
	selector: 'page-lanche',
	templateUrl: 'lanche.html'
})

export class LanchePage {
	public sanduiches = [];
	public pasteis = [];
	public carrinho = 
	{
		produto: [],
		qtd: []
	}

	constructor(public navCtrl: NavController, private http: Http, private alertCtrl: AlertController) {
 		
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

  	addCarrinho(x) {
  		//parseInt(this.carrinho.qtd);
  		this.carrinho.produto.push(x.nome);
  		this.carrinho.qtd.push(2);
  		console.log(this.carrinho);
  	}

	obterProdutosAPI(){
		this.http.get('http://192.168.0.7:3000/sanduiche') //Dados dos SANDUÍCHES
	  	.map(response => response.json())
	  	.toPromise()
	  	.then(
	 		response => {
	   			this.sanduiches = response;
			},

			err => {
		  		this.erroAPI('Sanduíches');
		});

  		this.http.get('http://192.168.0.7:3000/pasteis') //Dados dos PASTEIS
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
