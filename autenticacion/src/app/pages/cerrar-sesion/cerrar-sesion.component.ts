import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent {

  constructor(private servicioUsuario: UsuarioService, private router: Router){

  }

  ngOnInit(){
    setTimeout(()=>{

      this.servicioUsuario.salir()
      this.router.navigateByUrl("/login")
    },2000)
  }
}
