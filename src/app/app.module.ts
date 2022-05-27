import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { CrearQRComponent } from './components/crear-qr/crear-qr.component';
import { GamesComponent } from './components/games/games.component';
import { DeezerComponent } from './components/deezer/deezer.component';
import { ExamenComponent } from './components/examen/examen.component';

@NgModule({
  declarations: [AppComponent, TraductorComponent, NavComponent, PeliculasComponent, ConversorComponent, CrearQRComponent, GamesComponent, DeezerComponent, ExamenComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
