import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msg: string = "la luz esta encendida"

  click() {
    if (this.msg.includes("encendida")) {
      this.msg = "la luz esta apagada"
    }
    else {
      this.msg = "la luz esta encendida"

    }
  }

  title: string = 'testingg';
}
