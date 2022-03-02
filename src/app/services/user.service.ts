import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:5000/usuarios';
  usuario: User = {} as User;
  likes: User[] = [];

  constructor(private HttpClient: HttpClient) { }

  getUsers(){
    return this.HttpClient.get(this.url);
  }

  sendUser(user: User){
    return this.HttpClient.post(this.url+'/save', user);
  }

  obtenerUser(id: number){
    return this.HttpClient.get(this.url+'/'+id);
  }

  login(correo: string) {
    let searchParamc = new HttpParams();
    searchParamc = searchParamc.append('query', correo);

    return this.HttpClient.post(this.url+'/login', searchParamc);
  }

  editarUsuario(id: number, edad: number, genero: string, descripcion: string){
    let obj = {edad, genero, descripcion}
    return this.HttpClient.put(this.url+'/editar/'+id, obj);
  }

  eliminarUsuario(id: number){
    return this.HttpClient.delete(this.url+'/eliminar/'+id);
  }

  mandarUsuario(usuario: User){
    this.usuario = usuario;
  }

  recibirUsuario(){
    return this.usuario;
  }

  mandarLikes(likes: Array<User>){
    this.likes = likes;
  }

  recibirLikes(){
    return this.likes;
  }

}
