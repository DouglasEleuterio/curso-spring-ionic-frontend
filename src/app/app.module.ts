import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from '@angular/common/http';
import {CategoriaService} from "./services/domain/categoria.service";
import {ErrorInterceptorProvider} from "../interceptors/error-interceptor";

@NgModule({
  declarations: [
    MyApp // Componentes ou páginas
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp // Quando o declarations por páginas, precisamos referenciar em entry
  ],
  providers: [
    StatusBar, // Classes que receberão injeções
    SplashScreen, // Garante a mesma instancia da injeção
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService, // Escopo do serviço aqui é global. caso seja especifico, importar no modulo especifico.
    ErrorInterceptorProvider
  ]
})
export class AppModule {}
