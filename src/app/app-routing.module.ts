import { ExamenComponent } from './components/examen/examen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraductorComponent } from './components/traductor/traductor.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { GamesComponent } from './components/games/games.component';
import { CrearQRComponent } from './components/crear-qr/crear-qr.component';
import { DeezerComponent } from './components/deezer/deezer.component';

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
  { path: 'games', component: GamesComponent, pathMatch: 'full' },
  { path: 'deezer', component: DeezerComponent, pathMatch: 'full' },
  { path: 'biblioteca', component: ExamenComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
