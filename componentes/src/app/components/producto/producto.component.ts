import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  @Input()
  producto!: Producto;

  comprar(): void {
    this.producto.comprado = !this.producto.comprado
  }

  pulsacion(event: KeyboardEvent){
    //console.log('tecla pulsada',event.key)
    if(event.key === 'p'){
      this.comprar()
    }
  }

  pierdeFoco(){
    console.log('he perdido el foco', new Date().toTimeString())
  }


}
