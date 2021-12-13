import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NavVisibleService} from "../../service/nav-visible.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  router:Router;

  constructor(router: Router, private serviceNavVisible:NavVisibleService) {
    this.router = router;
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      contraseña: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.serviceNavVisible.isVisible(this.router.url);
  }

  registro(){
    this.router.navigate(['/registro']);
  }

}
