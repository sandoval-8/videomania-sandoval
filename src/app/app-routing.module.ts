import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "../../../videoclub-sandoval/src/app/components/form/form.component";
import {LoginComponent} from "../../../videoclub-sandoval/src/app/view/login/login.component";
import {RegistroComponent} from "../../../videoclub-sandoval/src/app/view/registro/registro.component";
import {ListadoComponent} from "../../../videoclub-sandoval/src/app/components/listado/listado.component";
import {InfoComponent} from "../../../videoclub-sandoval/src/app/components/info/info.component";
import {CarritoComponent} from "../../../videoclub-sandoval/src/app/components/carrito/carrito.component";

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
