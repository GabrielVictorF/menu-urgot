import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarItemPage } from './adicionar-item';

@NgModule({
  declarations: [
    AdicionarItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarItemPage),
  ],
})
export class AdicionarItemPageModule {}
