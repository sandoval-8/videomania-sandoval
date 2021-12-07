import { Component, OnInit } from '@angular/core';
import {CarritoService} from "./service/carrito.service";
import {Pelicula} from "../../modelo/pelicula";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carritoPelicula:Pelicula[] = [];

  constructor(private serviceCarrito:CarritoService) { }

  ngOnInit(): void {
    this.carritoPelicula = this.serviceCarrito.getPelicula();
    this.carritoPelicula.forEach((pelicula) => {
      console.log(pelicula);
    });
  }

  quitar(idEliminar:number){ //Elimina elemento a partir de un ID
    this.carritoPelicula.forEach((pelicula) => {
      if (idEliminar !== pelicula.id){ //Deja pasa todos los que no son idEliminar y crea un nuevo array<number>
        this.carritoPelicula.push(pelicula);
        console.log(this.carritoPelicula);
      }
    })
  }

}
