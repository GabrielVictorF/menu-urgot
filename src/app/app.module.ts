import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from 'angularfire2/database';

import { PedidosPage } from '../pages/pedidos/pedidos';
import { PedidoDetalhePage } from '../pages/pedido-detalhe/pedido-detalhe';
import { LanchePage } from '../pages/lanche/lanche';
import { BebidaPage } from '../pages/bebida/bebida';
import { TabsPage } from '../pages/tabs/tabs';
import {CarrinhoPage} from '../pages/carrinho/carrinho';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { AdicionarItemPage } from '../pages/adicionar-item/adicionar-item';
import { EditarPage } from '../pages/editar/editar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { FuncoesProvider } from '../providers/funcoes/funcoes';
import { CarrinhoProvider } from '../providers/carrinho/carrinho';
import { ApiProvider } from '../providers/api/api';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwq4B6SYbMZPbb6kbIxzopQ7oVZkCkBqU",
    authDomain: "menu-urgot.firebaseapp.com",
    databaseURL: "https://menu-urgot.firebaseio.com",
    projectId: "menu-urgot",
    storageBucket: "menu-urgot.appspot.com",
    messagingSenderId: "918004006962"
  };

@NgModule({
  declarations: [
    MyApp,
    PedidosPage,
    LanchePage,
    BebidaPage,
    TabsPage,
    CarrinhoPage,
    DetalhePage,
    AdicionarItemPage,
    EditarPage,
    PedidoDetalhePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PedidosPage,
    LanchePage,
    BebidaPage,
    TabsPage,
    CarrinhoPage,
    DetalhePage,
    AdicionarItemPage,
    EditarPage,
    PedidoDetalhePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireModule,
    AngularFireDatabase,
    FuncoesProvider,
    CarrinhoProvider,
    ApiProvider
  ]
})
export class AppModule {}
