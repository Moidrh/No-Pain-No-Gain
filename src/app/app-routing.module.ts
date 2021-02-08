import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { SedeComponent } from './pages/sede/sede.component';
import { CiudadComponent } from './pages/ciudad/ciudad.component';

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'sede', component: SedeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'ciudad', component: CiudadComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
