import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Pelicula} from "../../../modelo/pelicula";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito:Pelicula[] = [];

  constructor() { }

  getPelicula():Pelicula[] {
    return this.carrito;
  }
  setPelicula(pelicula:Pelicula){
    this.carrito.push(pelicula);
  }
}
