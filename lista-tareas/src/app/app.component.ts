import { Component } from '@angular/core';
import { Tarea } from './interfaces/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-tareas';

  tareas: Tarea[] = [ {descripcion: "comprar pan", hecha:false}]

  insertar(descripcionEntrante: string){
    this.tareas.push({
      descripcion: descripcionEntrante,
      hecha:false
    })
  }
}
