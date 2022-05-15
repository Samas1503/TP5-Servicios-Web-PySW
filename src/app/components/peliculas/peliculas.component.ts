import { FilmsService } from './../../services/films.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor(private peliculaService: FilmsService) { }

  ngOnInit(): void {
  }

  obtenerPelicula(id: string) {
    
  }

}
