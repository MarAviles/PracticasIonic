import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { EditarperfilPage } from '../editarperfil/editarperfil.page';

import { User } from '../interfaces/user.model';
import { MegustasPage } from '../megustas/megustas.page';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  usuario: User = {} as User;
  likes: User[] = [];

  constructor(private UserService: UserService, private ModalController: ModalController,
              private Router: Router, private alertController: AlertController) {}

  ngOnInit() {
    this.usuario = this.UserService.recibirUsuario();
  }

  async abrirModal(){
    const modal = await this.ModalController.create({
      component: EditarperfilPage,
      componentProps: {
        'usuario': this.usuario
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    if(data){
      this.obtenerUsuario(data.id);
    }
    
  }

  obtenerUsuario(id: number){
    this.UserService.obtenerUser(id).subscribe((res:any)=>{    
      this.usuario = res;
      this.UserService.mandarUsuario(this.usuario);
    })
  }

  async alert() {
    this.usuario = this.UserService.recibirUsuario();
    //console.log("usuario que va a eliminar",this.usuario);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Estás seguro de que quieres eliminar tu cuenta?',
      message: 'Si eliminas tu cuenta, esta no podrá ser recuperada',
      buttons: [
        {
          text: 'Aceptar',
          id: 'confirm-button',
          handler: () => {
            this.eliminar();
            this.cerrarSesion();
          }
        },
        {
          text: 'Cancelar',
          id: 'cancel-button',
          handler: (blah) => {
          console.log('cancelado');
          }
        }
      ]
    });

    await alert.present();
  }

  cerrarSesion(){
    this.Router.navigate([''])
  }

  eliminar(){
    this.UserService.eliminarUsuario(this.usuario.id).subscribe((res)=>{
      console.log("usuario eliminado");
    },(error)=>{
      console.log("usuario eliminado con error xd")
    });
  }

  async getlike(){
    this.likes = this.UserService.recibirLikes();
    const modal = await this.ModalController.create({
      component: MegustasPage,
      componentProps: {
        'likes': this.likes
      }
  });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    if(data){
      this.obtenerUsuario(data.id);
    }
    
  }

}
