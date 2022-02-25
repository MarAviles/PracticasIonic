import { Injectable } from '@angular/core';
import { User } from '../interface/user.modelo';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:5000/usuarios";
  usuario: User[] = [];

  constructor(private HttpClient: HttpClient) { }

  getUsuario(i: number){
    return this.usuario[i]
  }

  getUsuarios(){
    return this.HttpClient.get(this.url);
  }

  sendUsuario(usuario : User){
    return this.HttpClient.post(this.url,usuario)
  }

  // setLike(usuario: User){
  //   this.usuario[0].like.push(usuario);
  //   console.log('Usuarios likeados')
  //   console.log(this.usuario[0]);
  // }

  // getLike(){
  //   return this.usuario[0].like;
  // }

}
