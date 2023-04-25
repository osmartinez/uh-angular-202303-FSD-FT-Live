import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { DatosAcceso } from '../interfaces/datos-acceso';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  registrar(nuevoUsuario: Usuario){
    return this.http.post("http://localhost:3000/register",nuevoUsuario)
  }

  acceder(datos: DatosAcceso){
    return this.http.post("http://localhost:3000/login",datos)
  }
}
