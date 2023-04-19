import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  productos: Producto[] = [
    {
      codigo: "0000001",
      nombre: "Cafetera",
      img: "https://cdn.shopify.com/s/files/1/0281/0619/5026/products/koffy-45_800x.jpg?v=1644831413",
      precio: 92,
      stock: 2,
      comprado: false,
      categorias: ["electrodomestico","casa","cafe"]
    },
    {
      codigo: "0000002",
      nombre: "Lavadora",
      img: "https://images.samsung.com/is/image/samsung/p6pim/es/dv80t5220tt-s3/gallery/es-dryer-dv80t5220tt-dv80t5220tt-s3-534377191?$1300_1038_PNG$",
      precio: 150,
      stock: 6,
      comprado: false,
      categorias: ["electrodomestico","casa","ropa"]
    },
  ]
}
