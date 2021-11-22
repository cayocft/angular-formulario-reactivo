import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Agregar http cliente
import { HttpClientModule } from '@angular/common/http';
//FIN Agregar http cliente
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MostrarDosCamposComponent } from './mostrar-dos-campos/mostrar-dos-campos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MostrarDosCamposComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

