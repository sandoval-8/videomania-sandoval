import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {PeliculaService} from "./service/pelicula.service";
import {Pelicula} from "../../modelo/pelicula";
import {Observable, Subscription} from "rxjs";
import {parse} from "@angular/compiler/src/render3/view/style_parser";
import {Router} from "@angular/router";
import {NavComponent} from "../../view/nav/nav.component";
import {NavVisibleService} from "../../service/nav-visible.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, OnDestroy{

  peliculas:Pelicula[] = [];

  obs:Subscription= new Subscription();

  constructor(private service:PeliculaService, private router:Router, private serviceNavVisible:NavVisibleService) { }

  ngOnInit(): void {
    this.serviceNavVisible.isVisible(this.router.url); //Le pasa la ruta al servicio.
    this.getListMovie();
  }

  ngOnDestroy(): void {
    this.obs.unsubscribe();
    console.log("Se destruyo el subscribe")
  }

  getListMovie(){
    this.obs = this.service.getListMovie().subscribe((peliculas) => {
      console.log(peliculas);
      this.peliculas = peliculas;
    });
  }

  info(id:number){
    console.log('id:' + id);
    this.router.navigate(['info/' + id]);
  }

}

