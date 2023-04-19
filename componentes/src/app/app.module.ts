import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { FormsModule } from '@angular/forms';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ListaProductosComponent,
    FormRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
