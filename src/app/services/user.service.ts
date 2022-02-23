import { Injectable } from '@angular/core';
import { User } from '../interface/user.modelo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuario: User[] = [
    {
      nombre: 'Taylor Swift',
      img: 'tay.jpg',
      edad: '32',
      like: []
    },
    {
      nombre: 'Devon Clarson',
      img: 'devon.jpg',
      edad: '25',
      like: [],
    },
    {
      nombre: 'Ross Lynch',
      img: 'ross.jpg',
      edad: '26',
      like: []
    },
    {
      nombre: 'Jesse Rutherford',
      img: 'jesse.jpg',
      edad: '30',
      like: []
    },
    {
      nombre: 'Joe Alwyn',
      img: 'joe.jpg',
      edad: '31',
      like: []
    },
    {
      nombre: 'Margot',
      img: 'margot.jpg',
      edad: '31',
      like: []
    },
    {
      nombre: 'Nick Jonas',
      img: 'nick.jpg',
      edad: '29',
      like: []
    },
    {
      nombre: 'Pol Granch',
      img: 'pol.jpg',
      edad: '23',
      like: []
    },
    {
      nombre: 'Selena Gomez',
      img: 'selena.jpg',
      edad: '29',
      like: []
    },
    {
      nombre: 'Sen Senra',
      img: 'sen.jpg',
      edad: '26',
      like: []
    }
  ]

  constructor() { }

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
