import { Component, OnInit } from '@angular/core';
import {PeliculaService} from "./service/pelicula.service";
import {Pelicula} from "../../modelo/pelicula";
import {Observable} from "rxjs";
import {parse} from "@angular/compiler/src/render3/view/style_parser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  peliculas:Pelicula[] = [];

  constructor(private service:PeliculaService, private router:Router) { }

  ngOnInit(): void {
    this.getListMovie();
  }

  getListMovie(){
    this.service.getListMovie().subscribe((peliculas) => {
      console.log(peliculas);
      this.peliculas = peliculas;
    });
  }

  info(id:number){
    console.log('id:' + id);
    this.router.navigate(['info/' + id]);
  }

}
