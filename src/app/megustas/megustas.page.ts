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
  }

  cerrar(){
    this.ModalController.dismiss();
  }


}
