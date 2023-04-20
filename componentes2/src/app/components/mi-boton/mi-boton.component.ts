import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mi-boton',
  templateUrl: './mi-boton.component.html',
  styleUrls: ['./mi-boton.component.css']
})
export class MiBotonComponent {
  @Input()
  nombreHijo!: string

  @Output()
  miClick = new EventEmitter()

  divClickado(){
   this.miClick.emit()
  }
}
