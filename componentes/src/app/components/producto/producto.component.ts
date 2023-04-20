import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  @Input()
  producto!: Producto;

  @Output()
  emitProductoComprado = new EventEmitter()

  comprar(): void {
    this.producto.comprado = !this.producto.comprado
    this.emitProductoComprado.emit(this.producto)
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
