import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /**
   * Ao utilziar o metodo Push.
   * È realizado o empilhamento de páginas, controlado pelo Ionic.
   * Inclusive é criado a seta para voltar para a página anterior e a respectiva navegação de back automaticamente.
   * Ao utilizar setRoot não é construido de forma que automatiza o back e não exibe a seta.
   */
  login(){
    this.navCtrl.setRoot('CategoriasPage');
  }

}
