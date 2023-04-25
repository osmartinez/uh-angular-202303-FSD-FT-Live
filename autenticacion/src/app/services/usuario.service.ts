import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { DatosAcceso } from '../interfaces/datos-acceso';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  registrar(nuevoUsuario: Usuario){
    return this.http.post("http://localhost:3000/register",nuevoUsuario)
  }

  acceder(datos: DatosAcceso){
    return this.http.post("http://localhost:3000/login",datos)
  }

  // logout
  salir(){
    this.cookies.delete('_user')
  }


  // funcion para guardar un usuario en cookies
  guardarEnCookies(usuario: Usuario): void{
    // el nombre de la cookie es "_user"
    this.cookies.set('_user', JSON.stringify(usuario))
  }

  // otra funcion para ver si hay un usuario en cookies
  estaLoggeado(): boolean{
    const existe:boolean = this.cookies.check('_user')
    return existe
  }

  // funcion que recupere el usuario de las cookies
  sacarDeCookies():Usuario{
    const valor: string = this.cookies.get('_user')
    const usuario: Usuario = JSON.parse(valor)
    return usuario
  }
}
