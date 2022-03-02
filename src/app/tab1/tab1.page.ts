import { Component } from '@angular/core';
import { User } from '../interfaces/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  usuarios:User[] = [];
  usuario: User = {} as User;
  perfil: User = {} as User;
  i:number = 0;
  Likes: User[] = [];

  constructor(private UserService: UserService) {}

  ngOnInit() {
    this.ObtenerUsuarios();
    this.perfil = this.UserService.recibirUsuario();
  }

  ObtenerUsuarios(){
    this.UserService.getUsers().subscribe((res:any)=>{
      this.usuarios = res;
      if(this.perfil.nombre === this.usuarios[0].nombre){
        this.i = this.i + 1;
        this.usuario = this.usuarios[this.i];
      }else{
        this.usuario = this.usuarios[this.i];
      }
    },(error)=>{
    });
  }

  Like(){
    if(this.i < this.usuarios.length){
      this.Likes.push(this.usuario);
      console.log(this.Likes);
      this.UserService.mandarLikes(this.Likes);
    }

    this.i = this.i + 1;
    if(this.i < this.usuarios.length){
      if(this.perfil.nombre === this.usuarios[this.i].nombre){
        this.i = this.i + 1;
        this.usuario = this.usuarios[this.i];
      }else{
        this.usuario = this.usuarios[this.i];
      }
    }
  }


  Dislike(){
    this.i = this.i + 1;
    if(this.i < this.usuarios.length){
      if(this.perfil.nombre === this.usuarios[this.i].nombre){
        this.i = this.i + 1;
        this.usuario = this.usuarios[this.i];
      }else{
        this.usuario = this.usuarios[this.i];
      }
    }
  }
}
