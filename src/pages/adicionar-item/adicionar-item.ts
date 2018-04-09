import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AdicionarItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar-item',
  templateUrl: 'adicionar-item.html',
})
export class AdicionarItemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  private Item = this.navParams.get('Item');
  public carrinho = new Array<any>();

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarItemPage');
  }

  compra(version) {
  	let prompt = this.alertCtrl.create({
      title: this.Item.nome,
      message: "Quantas Unidades?",
      inputs: [
        {
          name: 'qtd',
          placeholder: 'Vou querer...',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
          	this.carrinho.push(this.Item);
            console.log(this.carrinho);
          }
        }
      ]
    });
    prompt.present();
  }
}
