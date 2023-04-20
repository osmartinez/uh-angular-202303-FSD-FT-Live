import { Component, Input } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {

  @Input()
  tarea!: Tarea


  hacerTarea(){
    this.tarea.hecha = !this.tarea.hecha
  }
}
