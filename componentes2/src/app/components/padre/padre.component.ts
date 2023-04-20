import { Component } from '@angular/core';
import { Mensaje } from 'src/app/interfaces/mensaje';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  mensajeDeHijo: string = ""
  nombreHijo: string = ""

  hijoPulsado(mensaje: Mensaje){
    this.mensajeDeHijo = mensaje.contenido
    this.nombreHijo = mensaje.nombreEmisor
  }
}
