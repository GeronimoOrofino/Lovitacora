import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../interfaces/usuario.interface';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {

  formulariogrupo : FormGroup;

  constructor(private formulariobuilder : FormBuilder, private userService : UsuarioService){

    this.formulariogrupo = this.formulariobuilder.group({
      nombre : ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      tipo: ['',[Validators.required]],
      estado: ['', [Validators.required]],
      apodo: ['',[Validators.required]]
    })

  }

  enviarFormulario (){
    if (this.formulariogrupo.valid){
      const nuevousuario = this.formulariogrupo.value;
      this.userService.agregarUsuario(nuevousuario).subscribe({
        next: (respuesta) =>{
          console.log("estos son los datos del formulario: ", this.formulariogrupo.value);
        },
        error: (err) => {
          console.log("algo salio mal en subirFormulario");
        }
      });
    }
    else{
      console.log("por favor escriba bien los campos obligatorios");
    }
  }

}
