import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-tarea',
  templateUrl: './input-tarea.component.html',
  styleUrls: ['./input-tarea.component.css']
})
export class InputTareaComponent {
  descripcion: string = ""

  @Output()
  emitInsertarTarea = new EventEmitter()

  insertarTarea(){
    this.emitInsertarTarea.emit(this.descripcion)
  }
}
