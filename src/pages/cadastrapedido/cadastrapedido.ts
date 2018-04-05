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

pedidos ={
	bebida:'',
	bebida_quantidade: '',
	lanche:'',
	lanche_quantidade:''
};


  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrapedidoPage');
  }

cadastrarpedido(){
	console.log("cadastrando pedido: " + this.pedidos.bebida);
    console.log("cadastrando pedido: " + this.pedidos.bebida_quantidade);
    console.log("cadastrando pedido: " + this.pedidos.lanche);
    console.log("cadastrando pedido: " + this.pedidos.lanche_quantidade);

let body = JSON.stringify(this.pedidos);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    this.http.post('http://localhost:3000/pedidos', body, options)
        .map(res => res.json())
        .toPromise()
        .then(response => {
                            console.log(response);
                            this.navCtrl.pop();
                          }
        );
    
    
  }

}
