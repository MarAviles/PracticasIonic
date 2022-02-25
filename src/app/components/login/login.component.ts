import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/interface/user.modelo';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  

  formulario = this.FormBuilder.group({
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    edad: null,
    genero: '',
    descripcion: '',
    imagen: '',
  });

  constructor(private FormBuilder: FormBuilder, private UserService: UserService) { }

  ngOnInit() {}


  guardar(){
    //  let flor: User = {
    //    nombre: this.formulario.get('nombre')?.value,
    //    especie:this.formulario.get('especie')?.value,
    //    color: this.formulario.get('color')?.value
    //   }
    // console.log(flor);

    this.UserService.sendUsuario(this.formulario.value).subscribe((res: any)=>{
      console.log(res);
    });  

    this.cleanForm();
  }

  MostrarUsuarios(){

  }


  cleanForm(){
    this.formulario.reset();
  }

}
