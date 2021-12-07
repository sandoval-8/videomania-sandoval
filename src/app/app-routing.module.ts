import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FormComponent} from "./components/form/form.component";
import {LoginComponent} from "./view/login/login.component";
import {RegistroComponent} from "./view/registro/registro.component";
import {ListadoComponent} from "./components/listado/listado.component";
import {InfoComponent} from "./components/info/info.component";
import {CarritoComponent} from "./components/carrito/carrito.component";

const routes: Routes = [
  { path: 'form', component:FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component:RegistroComponent },
  { path: '', component: ListadoComponent },
  { path: 'info/:id', component:InfoComponent },
  { path: 'carrito', component:CarritoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
