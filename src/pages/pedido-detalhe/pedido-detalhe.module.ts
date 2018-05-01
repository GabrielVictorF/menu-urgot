import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoDetalhePage } from './pedido-detalhe';

@NgModule({
  declarations: [
    PedidoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(PedidoDetalhePage),
  ],
})
export class PedidoDetalhePageModule {}
