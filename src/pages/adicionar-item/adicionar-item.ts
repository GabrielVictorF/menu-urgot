import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private Item = this.navParams.get('Item');
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarItemPage');
  }

}
