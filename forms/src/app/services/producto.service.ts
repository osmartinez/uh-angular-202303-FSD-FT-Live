import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  crear(producto: Producto){
    return this.http.post("http://localhost:3000/productos", producto)
  }

  // ejercicio 1
  // crear funcion para obtener todos los productos
  obtenerTodos(){
    return this.http.get("http://localhost:3000/productos")
  }
}
