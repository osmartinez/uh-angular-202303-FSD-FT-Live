import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {

  //ejercicio 3. Genera una variable de tipo Producto[] llamada productos, vacía
  productos: Producto[] = []

  // ejercicio 2. crear un constructor e inyecta el servicio de productos
  constructor(private servicio: ProductoService){}

  //ejercicio 4. Usa ngOnInit para obtener todos los productos y rellenar 
  // la variable de arriba
  ngOnInit(){
    this.servicio.obtenerTodos().subscribe((resultado:any)=>{
        this.productos = resultado
    })
  }

}
