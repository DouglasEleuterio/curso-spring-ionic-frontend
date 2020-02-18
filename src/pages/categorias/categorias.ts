import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CategoriaService} from "../../app/services/domain/categoria.service";
import {CategoriaDTO} from "../../models/categoria.dto";
import {API_CONFIG} from "../../config/api.config";

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  items: CategoriaDTO[];
  bucketURl: string = API_CONFIG.bucketBaseURL;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoriaService: CategoriaService
  ) {
  }

  ionViewDidLoad() {
    this.categoriaService.findAll() // Chamada Assincrona
      .subscribe(response => {
          this.items = response;
        console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
