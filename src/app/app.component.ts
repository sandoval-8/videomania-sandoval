import {AfterContentInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NavComponent} from "./view/nav/nav.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'videomania-sandoval';

  visible:boolean = false;

  linksDisables:string[] = ['/login','/registro'];

  isVisible(param:string){
    if (this.linksDisables[0] == param || this.linksDisables[1] == param){
      this.visible = false;
    }else {
      this.visible = true;
    }
  }

}
