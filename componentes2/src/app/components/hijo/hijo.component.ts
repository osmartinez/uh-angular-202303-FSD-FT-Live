import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mensaje } from 'src/app/interfaces/mensaje';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  mensajeParaPadre: string  = ""

  @Input()
  nombre!: string

  @Output()
  emitPulsado = new EventEmitter()

  pulsar(){
    const mensaje: Mensaje = {nombreEmisor: this.nombre, contenido: this.mensajeParaPadre}
    this.emitPulsado.emit(mensaje)
  }
}
