import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-primer-proyecto';
  valor: number = 0
  mensaje: string = "hola qué tal"

  aumentar(): void {
    this.valor++
  }

  restar(): void {
    this.valor--
  }


}
