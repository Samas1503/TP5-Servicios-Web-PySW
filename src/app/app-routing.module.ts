import { CrearQRComponent } from './components/crear-qr/crear-qr.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraductorComponent } from './components/traductor/traductor.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ConversorComponent } from './components/conversor/conversor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix', //default
    redirectTo: 'pelicula',
  },
  { path: 'pelicula', component: PeliculasComponent, pathMatch: 'full' },
  { path: 'conversor', component: ConversorComponent, pathMatch: 'full' },
  { path: 'traductor', component: TraductorComponent, pathMatch: 'full' },
  { path: 'qrCreator', component: CrearQRComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
