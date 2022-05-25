import { Cancion } from './../../models/cancion';
import { DeezerService } from './../../services/deezer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deezer',
  templateUrl: './deezer.component.html',
  styleUrls: ['./deezer.component.css']
})
export class DeezerComponent implements OnInit {

  nombre!: string;
  cancion!: Cancion;
  canciones!: Array<Cancion>;

  constructor(private deezerservice: DeezerService) {
  }

  ngOnInit(): void {
  }

  buscarCanciones(texto: string) {
    this.canciones = new Array<Cancion>();
    this.deezerservice.getCanciones(texto).subscribe(res => {
      this.caragarCanciones(res.data)
    })
  }

  caragarCanciones(canciones: Array<any>) {
    for (let i = 0; i < canciones.length; i++){
      this.cancion = new Cancion()
      this.cancion.id = canciones[i].id;
      this.cancion.title = canciones[i].title;
      this.cancion.artista = canciones[i].artist.name;
      this.cancion.url = canciones[i].preview;
      this.cancion.imagen = canciones[i].album.cover_xl;
      this.canciones.push(this.cancion);
    }
  }

}
