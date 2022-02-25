import { Component } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { User } from '../interface/user.modelo';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  usuario:User = {} as User
  i:number = 1;
  
  constructor(private UserService: UserService) {}

  ngOnInit(): void {   
    this.usuario = this.UserService.getUsuario(this.i);
  }

  // Like(){
  //   this.usuario = this.UserService.getUsuario(this.i);
  //   this.UserService.setLike(this.usuario);
    
  //   this.i = this.i + 1;
  //   this.usuario = this.UserService.getUsuario(this.i);
  // }

  Dislike(){
    this.i = this.i + 1;
    this.usuario = this.UserService.getUsuario(this.i);
  }

  
}
