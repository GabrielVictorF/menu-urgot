import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosPage } from '../pedidos/pedidos';
import { Http, RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the CadastrapedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrapedido',
  templateUrl: 'cadastrapedido.html',
})
export class CadastrapedidoPage {

pedidos2 ={
cliente: '',
mesa :'',
	bebida:'',
	qtd_bebida: '',
	lanche:'',
	qtd_lanche:''
};


  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrapedidoPage');
  }

cadastrarpedido(){
	console.log("cadastrando pedido: " + this.pedidos2.cliente);
  console.log("cadastrando pedido: " + this.pedidos2.mesa);
  console.log("cadastrando pedido: " + this.pedidos2.bebida);
    console.log("cadastrando pedido: " + this.pedidos2.qtd_bebida);
    console.log("cadastrando pedido: " + this.pedidos2.lanche);
    console.log("cadastrando pedido: " + this.pedidos2.qtd_lanche);

let body = JSON.stringify(this.pedidos2);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    this.http.post('http://localhost:3000/pedidos2', body, options)
        .map(res => res.json())
        .toPromise()
        .then(response => {
                            console.log(response);
                            this.navCtrl.pop();
                          }
        );
    
    
  }

}
