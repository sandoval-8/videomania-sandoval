import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { RegistroComponent } from './view/registro/registro.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { InfoComponent } from './components/info/info.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormComponent } from './components/form/form.component';
import { NavComponent } from './view/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CarritoComponent,
    InfoComponent,
    ListadoComponent,
    FormComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
