import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { UsuarioGuard } from './guards/usuario.guard';
import { CerrarSesionComponent } from './pages/cerrar-sesion/cerrar-sesion.component';
import { VisitanteGuard } from './guards/visitante.guard';
import { AbandonarGuard } from './guards/abandonar.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canDeactivate: [AbandonarGuard]},
  {path: 'perfil', component: PerfilComponent, canActivate: [UsuarioGuard]},
  {path: 'login', component: LoginComponent, canActivate: [VisitanteGuard]},
  {path: 'registro', component: RegistroComponent, canActivate: [VisitanteGuard]},
  {path: 'logout', component: CerrarSesionComponent, canActivate: [UsuarioGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
