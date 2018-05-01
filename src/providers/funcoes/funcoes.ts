//Components
import { Injectable } from '@angular/core';
import { AlertController, ToastController} from 'ionic-angular';

//Pages
import { CarrinhoPage } from '../../pages/carrinho/carrinho';

//Providers
import { CarrinhoProvider } from '../carrinho/carrinho';

@Injectable()
export class FuncoesProvider {
    public pedido = [];
    private qtdPedidos: number = 0;
    
    constructor (public toastCtrl : ToastController, public alertCtrl: AlertController, 
                 public carProvider: CarrinhoProvider) {
        console.log('Hello FuncoesProvider Provider');
    }
    
    public informaMesa() {
        let prompt = this.alertCtrl.create({
            title: "Mesa",
            message: "Qual mesa?",
            inputs: [{
                name: 'mesa',
                placeholder: 'É a mesa...',
                type: 'number'
            }],
            buttons: [{
                text: 'Cancelar'
            },
            {
                text: 'Salvar',
                handler: data => {
                    //this.carProvider.carrinho.mesa = data.mesa;
                    ///this.carProvider.carrinho.numPedido = this.qtdPedidos + 1;
                    this.qtdPedidos++;
                    this.showToast('bottom', 'OK, mesa ' + data.mesa + '.');
                }
            }]
        });
        prompt.present();
    }
    
    public erroAPI(req) { // Ao ocorrer erro ao obter os dados exibe um ALERT de erro
        this.alertCtrl.create({
            title: 'Falha na conexão',
            buttons: [{ text: 'Estou ciente' }],
            subTitle: 'Não foi possível obter a lista de produtos [' + req + ']. Tente mais tarde.'
        }).present();
    }

    public showToast(position: string, text: string) { // Mostra um TOAST na tela
        let toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: position,
            cssClass: 'toast'
        });
        toast.present(toast);
    }

    confirmaCompra(){
        if(this.carProvider.carrinhoVazio())
            this.showToast('bottom', 'Carrinho vazio! Primeiro adicione alguns itens :D!');
        else {
            let confirm = this.alertCtrl.create({ // Exibe o Alert
                title: 'Confirmação de Pedido',
                message: 'Tem certeza que deseja efetuar esse pedido?',
                buttons: [{
                    text: 'Não',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        this.carProvider.pedidos.push(this.carProvider.carrinho);
                        this.carProvider.carrinho = [];
                        this.showToast('bottom', 'Compra efetuada');
                    }
                }]
            });
          confirm.present();
        }
    }

    public compra(item, version?) {
        let prompt = this.alertCtrl.create({
            title: item.categoria + " " + item.nome,
            message: "Quantas Unidades?",
            inputs: [{
                name: 'qtd',
                placeholder: 'Vão ser...',
                type: 'number'
            }],
            buttons: [{
                text: 'Cancelar'
            },
            {
                text: 'Salvar',
                handler: data => {
                    if (data.qtd != '') { // Caso o valor digitado na quantidade seja válido
                        item.qtd = data.qtd;
                        if (version) { // Caso o produto tenha mais de uma versão
                            item.versao = version;
                        } else {
                            item.versao = item.versoes; 
                        }
                        
                        item.status = "Em andamento";
                        this.carProvider.carrinho.push(item);
                        this.showToast('bottom', item.nome + ' foi adicionado ao seu carrinho!');
                    } else {
                        this.showToast('bottom', 'O campo quantidade tem que ser preenchido');
                        this.compra(version, item);
                    }
                }
            }]
        });
        prompt.present();
    }
}
