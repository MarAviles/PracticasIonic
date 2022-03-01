import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin = this.formBuilder.group({
    correo: '',
    password: ''
  });

  usuario : User[] = [];

  constructor(private UserService: UserService, private formBuilder: FormBuilder, private Router: Router,
            ) { }

  ngOnInit() {
  }

  entrar(){
    this.UserService.login(this.formularioLogin.get('correo').value).subscribe((res:any)=>{
    this.usuario = res;
    if(this.usuario.length === 0){
      console.log("usuario no encontrado");
    }else{
      this.UserService.mandarUsuario(this.usuario[0]);
      this.Router.navigate(['tabs/tabs/tab1'])
    }
    
    },(error)=>{
    });
  }

}
