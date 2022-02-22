import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  formulario = this.formBuilder.group({
    nombre: '',
    apellido: '',
    correo: '',
    comentario: '',
  })

  nombre = '';
  apellido = '';
  correo = '';
  comentario = '';
  status = false;

  constructor(private formBuilder: FormBuilder) {}

  guardar(){
    console.log("Llegaron los datos")
    this.status = true;
    this.nombre = this.formulario.get('nombre')?.value;
    this.apellido = this.formulario.get('apellido')?.value;
    this.correo = this.formulario.get('correo')?.value;
    this.comentario = this.formulario.get('comentario')?.value;
  }

}
