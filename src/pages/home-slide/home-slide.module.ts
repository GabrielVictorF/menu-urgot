import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeSlidePage } from './home-slide';

@NgModule({
  declarations: [
    HomeSlidePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeSlidePage),
  ],
})
export class HomeSlidePageModule {}
