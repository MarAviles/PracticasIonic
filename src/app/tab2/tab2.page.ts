import { Component } from '@angular/core';
import { User } from '../interface/user.modelo';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  usuario: User = {} as User;
  usuarios:User[] = [];

  constructor(private UserService: UserService) {}

  ngOnInit(): void {   
    this.usuario = this.UserService.getUsuario(0);
  }

  getlike() {
    this.usuarios = this.UserService.getLike();
  }

}
