import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {
  //nuevoProducto: Producto = { codigo: "", imagen: "", nombre: "", precio: 0, stock:0}

  public productForm: FormGroup


  constructor(private servicio: ProductoService, private formBuilder: FormBuilder){
    this.productForm = this.formBuilder.group({
      codigo: ['', [Validators.required,Validators.maxLength(9), Validators.minLength(9)]],
      nombre:['', [Validators.required, Validators.maxLength(25)]],
      precio: [0, [Validators.min(0), Validators.max(9999)]]
    })
  }

  // FormGroup -> grupo de controles
  // FormControl -> control individual


  submit(){
    this.crear()
  }


  crear(){
    const nuevoProducto: Producto = {
      nombre: this.productForm.get('nombre')?.value,
      codigo: this.productForm.get('codigo')?.value,
      imagen: '',
      precio: 0,
      stock: 0,
    }

    this.servicio.crear(nuevoProducto).subscribe((resultado:any)=>{
      console.log(resultado)
      alert("Producto creado!")
    })
  }
}
