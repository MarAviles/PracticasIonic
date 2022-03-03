import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  @Input() usuario: User;

  constructor(private ModalController: ModalController) { }

  ngOnInit() {
  }

  cerrar(){
    this.ModalController.dismiss({
     // 'likes': this.likes,
    })

  }

}
