import { Component } from '@angular/core';

import { User } from '../interfaces/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  usuario: User = {} as User;

  constructor(private UserService: UserService) {}

  ngOnInit() {
    this.usuario = this.UserService.recibirUsuario();
  }

  // mandarUsuario(usuario: User) {
  //   this.usuario = usuario;
  // }

}
