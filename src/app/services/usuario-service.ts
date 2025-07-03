import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 private urlapi = 'http://localhost:3000/Usuarios';

  constructor(private http : HttpClient) {

   }

   agregarUsuario (user : Usuario) : Observable <Usuario>{
    return this.http.post<Usuario>(this.urlapi,user);
  }

}
