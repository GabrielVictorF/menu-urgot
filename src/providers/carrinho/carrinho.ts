// Componentes
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

//Providers
import { FuncoesProvider } from '../funcoes/funcoes';

@Injectable()
export class CarrinhoProvider { // Provider responsável em guardar os pedidos e o carrinho
    public carrinho = [];
    public pedidos = [];

    constructor() {
    }

    public carrinhoVazio():boolean { // Verifica se há itens no carrinho 
        if (this.carrinho.length != 0) 
            return false; 
        else
            return true;
    }
}
