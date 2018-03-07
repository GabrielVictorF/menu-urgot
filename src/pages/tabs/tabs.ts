import { Component } from '@angular/core';

import { PedidosPage } from '../pedidos/pedidos';
import { BoloPage } from '../bolo/bolo';
import { BebidaPage } from '../bebida/bebida';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BoloPage;
  tab2Root = BebidaPage;
  tab3Root = PedidosPage;

  constructor() {

  }
}
