import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PeliculaService} from "../listado/service/pelicula.service";
import {Pelicula} from "../../modelo/pelicula";
import {CarritoService} from "../carrito/service/carrito.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  idPelicula:Params = {id:''};

  pelicula:Pelicula = {id:0, nombre:'', precio:0, clasificacion:{clasificacion:'none'}};

  constructor(private rutaActiva: ActivatedRoute, private service:PeliculaService, private serviceCarrito: CarritoService, private router:Router) { }

  ngOnInit(): void {
    this.paramRouter();
    this.getPeliculaForId(this.idPelicula.id);
  }

  paramRouter(){ //Recupera la ID de la pelicula del parametro de la ruta (localhost:4200/info:id)
    this.rutaActiva.params.subscribe((params: Params) => {
      this.idPelicula = params;
      console.log(this.idPelicula.id);
    })
  }

  getPeliculaForId(id:number){ //Busca UNA SOLA pelicula a partir del ID
    this.service.getPeliculaForId(id).subscribe((pelicula) => {
      this.pelicula = pelicula;
      console.log('pelicula:' + pelicula);
      console.log('clasificacion:' + pelicula.clasificacion.clasificacion);
    });
  }
//---------------------------------------------
  agregarAlCarrito(id:number){
    this.serviceCarrito.setPelicula(this.pelicula);
    this.router.navigate(['carrito']);
  }
}
