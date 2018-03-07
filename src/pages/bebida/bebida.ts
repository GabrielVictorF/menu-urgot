import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-bebida',
  templateUrl: 'bebida.html'
})
export class BebidaPage {
  constructor(public navCtrl: NavController) {

  }

  public bebidas = [
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
}
