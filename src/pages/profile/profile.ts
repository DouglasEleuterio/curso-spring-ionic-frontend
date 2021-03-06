import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {StorageService} from "../../app/services/storage.service";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  email: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: StorageService) {
  }

  /**
   * Carrega o metodo quando a página for carregada
   */
  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();

    if (localUser && localUser.email) {
      this.email = localUser.email
    }
  }

}
