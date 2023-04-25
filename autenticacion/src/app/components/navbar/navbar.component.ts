import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  hayUsuario: boolean = false

  constructor(private servicioUsuario: UsuarioService, private router: Router){
    this.hayUsuario = this.servicioUsuario.estaLoggeado()
  }

  ngOnInit(){
    this.router.events.subscribe( event =>{
      // cada vez que el usuario navega a alguna pagina
      if(event.constructor.name === "NavigationEnd"){
        //console.log('EVENTO DISPARADO!!',new Date().toLocaleTimeString())  
        this.hayUsuario = this.servicioUsuario.estaLoggeado()
      }
    })
  }

}
