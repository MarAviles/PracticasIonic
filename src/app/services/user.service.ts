import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:5000/usuarios';
  usuario: User = {} as User;

  constructor(private HttpClient: HttpClient) { }

  getUsers(){
    return this.HttpClient.get(this.url);
  }

  sendUser(user: User){
    return this.HttpClient.post(this.url+'/save', user);
  }

  login(correo: string) {
    let searchParamc = new HttpParams();
    searchParamc = searchParamc.append('query', correo);

    return this.HttpClient.post(this.url+'/login', searchParamc);
  }

  mandarUsuario(usuario: User){
    this.usuario = usuario;
  }

  recibirUsuario(){
    return this.usuario;
  }

}
