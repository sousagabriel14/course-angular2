//MODULO RAIZ

import { BrowserModule } from '@angular/platform-browser';  //Prepara a aplicação para ser exec em um browser
import { NgModule } from '@angular/core'; //Decorator @NgModule: seta o que a classe vai ser e conter

import { AppRoutingModule } from './app-routing.module'; // módulo de formulário
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';


@NgModule({       //Decorator @NgModule: seta o que a classe vai ser e conter 
  declarations: [ //Meta dados do modulo
    AppComponent
  ],
  imports: [ //Meta dados do modulo
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
