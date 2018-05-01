//Componentes
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

//Providers
import { FuncoesProvider } from '../funcoes/funcoes';

@Injectable()
export class ApiProvider {
    private apiKey: string = 'https://demo7908592.mockable.io/produtos';

    constructor(public http: Http) {
    }

     public obterProdutosAPI(){
         return this.http.get(this.apiKey)
      .map(res => res.json())
     }
}
