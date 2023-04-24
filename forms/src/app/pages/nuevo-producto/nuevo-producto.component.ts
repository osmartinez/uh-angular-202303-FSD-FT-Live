import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {
  nuevoProducto: Producto = { codigo: "", imagen: "", nombre: "", precio: 0, stock:0}

  constructor(private servicio: ProductoService){}

  crear(){
    this.servicio.crear(this.nuevoProducto).subscribe((resultado:any)=>{
      console.log(resultado)
      alert("Producto creado!")
    })
  }
}
