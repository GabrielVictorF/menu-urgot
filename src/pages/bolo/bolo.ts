import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-bolo',
  templateUrl: 'bolo.html'
})
export class BoloPage {

  constructor(public navCtrl: NavController) {

  }

  public sanduiches = [
  	{
  		id: 0,
  		img: "sanduiche-x-salada.jpeg",
  		nome: "X-salada",
  		preco: 3
  	},
  	{
  		id: 1,
  		img: "sanduiche-misto.jpeg",
  		nome: "Misto",
  		preco: 3
  	},
  	{
  		id: 2,
  		img: "sanduiche-hamburguer.jpeg",
  		nome: "Hambúrguer",
  		preco: 3
  	}
  ]

  public pasteis = [
  	{
  		id: 0,
  		img: "pastel-carne.jpeg",
  		nome: "Carne",
  		preco: 6
  	},
  	{
  		id: 1,
  		img: "pastel-frango.jpeg",
  		nome: "Frango",
  		preco: 3
  	},
  	{
  		id: 2,
  		img: "pastel-calabresa.jpeg",
  		nome: "Calabresa",
  		preco: 3
  	}
  ]
}
