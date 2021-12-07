import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro:FormGroup;
  router:Router;

  constructor(router:Router) {
    this.router = router;
    this.formRegistro = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      newcontraseña: new FormControl(''),
      againcontraseña: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/login']);
  }

}
