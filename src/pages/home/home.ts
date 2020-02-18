import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
  }

  //Quando a página for carregada (ionViewWillEnter) é desabilitado o menu lateral.
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  //Quando a página for Ativada (ionViewDidLeaver) é ativado o menu lateral.
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  /**
   * Ao utilziar o metodo Push.
   * È realizado o empilhamento de páginas, controlado pelo Ionic.
   * Inclusive é criado a seta para voltar para a página anterior e a respectiva navegação de back automaticamente.
   * Ao utilizar setRoot não é construido de forma que automatiza o back e não exibe a seta.
   */
  login() {
    this.navCtrl.setRoot('CategoriasPage');
  }

}
