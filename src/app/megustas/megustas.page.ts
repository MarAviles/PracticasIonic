import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/user.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-megustas',
  templateUrl: './megustas.page.html',
  styleUrls: ['./megustas.page.scss'],
})
export class MegustasPage implements OnInit {

  @Input() likes: Array<User>;
  constructor(private ModalController: ModalController) { }

  ngOnInit() {
    console.log(this.likes);
  }

  eliminar(i: number){
    console.log('elimino')
    this.likes.slice(i,1);
    console.log(this.likes);
  }

  cerrar(){
    this.ModalController.dismiss({
     // 'likes': this.likes,
    })

  }


}
