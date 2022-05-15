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

@NgModule({
  declarations: [AppComponent, TraductorComponent, NavComponent, PeliculasComponent, ConversorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
