import {EventEmitter, Injectable, Input, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavVisibleService {

  disableOnRoutes:string[] = ['/login', '/registro'];

  visible:boolean = true;

  @Output()
  eventoRuta:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  isVisible(param:string){ //Compara las rutas y emite el evento.
    if(this.disableOnRoutes[0]==param || this.disableOnRoutes[1]==param){
      this.visible=false;
    }else {
      this.visible=true;
    }
    this.eventoRuta.emit(this.visible);
  }
}
