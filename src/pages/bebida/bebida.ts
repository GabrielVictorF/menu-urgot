
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController, ToastController } from 'ionic-angular';
import {PedidosPage} from '../pedidos/pedidos';
import{CarrinhoPage} from '../carrinho/carrinho';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-bebida',
  templateUrl: 'bebida.html'
})
export class BebidaPage {
  constructor(public navCtrl: NavController, private http: Http, private alertCtrl: AlertController, public toastCtrl : ToastController) {

  }

  public bebidas_refrigerante = [
  	{
  		id: 0,
  		img: "bebida-coca-cola.jpg",
  		nome: "Coca-cola",
  		preco: 4.50
  	},
  	{
  		id:  1,
  		img: "bebida-antarctica.jpg",
  		nome: "Antártica",
  		preco: 4.50
  	},
  	{
  		id: 2,
  		img: "bebida-ice-cola.jpeg",
  		nome: "Ice cola",
  		preco: 4.50
  	}
  ]

  public bebidas_cha = [
	{
		id: 0,
		img: "cha-preto.jpeg",
  		nome: "Chá Preto",
  		preco: 23.50
	},
	{
		id: 1,
		img: "cha-hortela.jpeg",
  		nome: "Chá de Hortelã",
  		preco: 13.50
	},
	{
		id: 1,
		img: "cha-canela.jpeg",
  		nome: "Chá de Canela",
  		preco: 6.80
	}
  ]

  public bebidas_suco = [
  	{
  		id: 0,
		img: "suco-melancia.jpeg",
  		nome: "Melancia",
  		preco: 23.50
  	},
  	{
  		id: 1,
		img: "suco-tangerina.jpeg",
  		nome: "Tangerina",
  		preco: 23.50
  	},
  	{
  		id: 2,
		img: "suco-limao.jpeg",
  		nome: "Limão",
  		preco: 23.50
  	}
  ]


  

//    Addpedido(x) {
      //parseInt(this.carrinho.qtd);
//      this.carrinho.produto.push(x.nome);
  //    this.carrinho.qtd.push(2);
    //  console.log(this.carrinho);
  //  }

}
