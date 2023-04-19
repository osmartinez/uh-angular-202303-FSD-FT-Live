import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListHeaderModule } from './product-list-header/product-list-header.module';
import { ProductListComponent } from './product-list.component';



@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductListModule { }
