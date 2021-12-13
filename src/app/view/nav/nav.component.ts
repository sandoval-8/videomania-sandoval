import {Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NavVisibleService} from "../../service/nav-visible.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy{

  visible:boolean = false;
  evento:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private serviceNavVisible:NavVisibleService) { }

  ngOnInit(): void {
    this.evento = this.serviceNavVisible.eventoRuta;
    this.evento.subscribe((isVisible) => {
      this.visible = isVisible;
    })
  }

  ngOnDestroy(): void {
    this.evento.unsubscribe();
    console.log("Se desuscribio el evento")
  }
}
