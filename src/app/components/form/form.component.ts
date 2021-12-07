import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

export type Type = 'login' | 'registro';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  typeForm:string = '';

  constructor() {  }

  ngOnInit(): void {
    this.typeForm = 'login';
  }

  isLogin(type:Type):boolean{
    this.typeForm = type;
    return this.typeForm === 'login';
  }

  isRegistro(type:Type):boolean{
    this.typeForm = type;
    return this.typeForm === 'registro';
  }
}
