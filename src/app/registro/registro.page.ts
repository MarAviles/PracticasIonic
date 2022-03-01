import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../interfaces/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro = this.formBuilder.group({
    nombre: '',
    apellido:'',
    edad: null,
    genero: '',
    email: '',
    password: ''
  })

  constructor(private formBuilder: FormBuilder, private UserService: UserService, private Router: Router) { }

  ngOnInit() {
    this.ObtenerUsuarios();
  }

  ObtenerUsuarios(){
    this.UserService.getUsers().subscribe((res)=>{
      console.log(res);
    },(error)=>{
      console.log(error);
    });
  }


  registrar(){
    console.log(this.formularioRegistro.get('nombre')?.value)
    let usuario: User = {
      id: 1,
      nombre: this.formularioRegistro.get('nombre')?.value,
      apellido: this.formularioRegistro.get('apellido')?.value,
      correo: this.formularioRegistro.get('email')?.value,
      password: this.formularioRegistro.get('password')?.value,
      edad: this.formularioRegistro.get('edad')?.value,
      genero: this.formularioRegistro.get('genero')?.value,
      descripcion: '',
      imagen: '',
    }

    this.UserService.sendUser(usuario).subscribe((res: any)=>{
      console.log(res);
    },(error)=>{
      this.ObtenerUsuarios();
    });
    this.Router.navigate(['tabs/tab1'])
  }
}
