import {Injectable, OnInit} from '@angular/core';
import {observable, Observable, of} from "rxjs";
import {peliculas} from "../../../modelo/mock.pelicula";
import { Pelicula } from '../../../modelo/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService implements OnInit {

  peliculas:Pelicula[] = [];

  sendPelicula:Pelicula = {id:0, nombre:'',precio:0 ,clasificacion:{clasificacion:'none'}};

  constructor() {
    this.peliculas = peliculas;
  }

  ngOnInit(): void {
  }

  //Devuelve un Observable con TODAS las peliculas
  getListMovie():Observable<Pelicula[]> {
    return of(this.peliculas);
  }

  //Devuelve un Observable con UNA SOLA las peliculas
  getPeliculaForId(id:number):Observable<Pelicula>{
    this.peliculas.forEach((peliculaDeMatriz)=>{
      if(peliculaDeMatriz.id==id){
        console.log('El IF es verdadero');
        this.sendPelicula = peliculaDeMatriz;
      }
    });
    return of(this.sendPelicula);
  }

}
