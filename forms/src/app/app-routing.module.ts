import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'nuevo', component: NuevoProductoComponent},
  {path: 'lista', component: ListaProductosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
