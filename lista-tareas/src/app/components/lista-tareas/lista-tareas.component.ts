import { Component, Input } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  @Input()
  tareas!: Tarea[]
}
