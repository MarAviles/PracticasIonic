import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { User } from '../interfaces/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {

  formularioEditar = this.FormBuilder.group({
    edad: null,
    genero: '',
    descripcion: '',
  })

  @Input() usuario: User;
  user: User = {} as User;


  constructor(private FormBuilder: FormBuilder, private UserService: UserService, private Router: Router,
              private ModalController: ModalController) { }

  ngOnInit() {
    this.usuario = this.UserService.recibirUsuario();
    // console.log("Este es mi usuario actual");
    // console.log(this.usuario);
  }

  editar(){
    let edad: number= this.formularioEditar.get('edad').value;
    let genero: string = this.formularioEditar.get('genero').value;
    let descripcion: string = this.formularioEditar.get('descripcion').value;

    if(edad == null){
      edad = this.usuario.edad;
    }

    if(genero == ''){
      genero = this.usuario.genero;
    }

    if(descripcion == ''){
      descripcion = this.usuario.descripcion;
    }

    this.UserService.editarUsuario(this.usuario.id, edad, genero, descripcion).subscribe((res)=>{
    })

    this.ModalController.dismiss({
      'id': this.usuario.id,
    })
  }

  Salir(){
    this.ModalController.dismiss();
  }

}
