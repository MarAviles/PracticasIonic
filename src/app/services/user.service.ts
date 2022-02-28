import { Injectable } from '@angular/core';
import { User } from '../interface/user.modelo';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:5000/usuarios";
  usuario: User[] = [
    {
      nombre: "Taylor Swift",
      edad: 32,
      imagen: "tay.jpg",
      like: []
    },
    {
      nombre: "Devon Carlson",
      edad: 26,
      imagen: "devon.jpg",
      like: []
    },
    {
      nombre: "Joe Alwyn",
      edad: 31,
      imagen: "joe.jpg",
      like: []
    },
    {
      nombre: "Nick Jonas",
      edad: 29,
      imagen: "nick.jpg",
      like: []
    },
    {
      nombre: "Margot",
      edad: 31,
      imagen: "margot.jpg",
      like: []
    },
    {
      nombre: "Pol Granch",
      edad: 23,
      imagen: "pol.jpg",
      like: []
    },
    {
      nombre: "Selena Gomez",
      edad: 29,
      imagen: "selena.jpg",
      like: []
    },
    {
      nombre: "Jesse R",
      edad: 30,
      imagen: "jesse.jpg",
      like: []
    },
    {
      nombre: "Ross Lynch",
      edad: 26,
      imagen: "ross.jpg",
      like: []
    },
    {
      nombre: "Man",
      edad: 32,
      imagen: "man.jpg",
      like: []
    },
    {
      nombre: "Sen senra",
      edad: 26,
      imagen: "sen.jpg",
      like: []
    },

  ];

  constructor(private HttpClient: HttpClient) { }

  getUsuario(i: number){
    return this.usuario[i]
  }

  setLike(usuario: User){
     this.usuario[0].like.push(usuario);
     console.log('Usuarios likeados')
     console.log(this.usuario[0]);
   }

   getLike(){
     return this.usuario[0].like;
   }

}
