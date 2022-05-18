import { Pelicula } from './../../models/pelicula';
import { FilmsService } from './../../services/films.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  pelicula!: Pelicula;
  idPeliculas!: Array<string>;
  peliculas!: Array<Pelicula>;
  publicidad!: Array<string>

  constructor(private peliculaService: FilmsService) {
    this.peliculas = new Array<Pelicula>();
    this.idPeliculas = [
      'tt1877830', //The Batman 2022
      'tt10648342', //Thor: Love and Thunder
      'tt9419884', //Doctor Strange en el multiverso de la locura
      'tt1464335', //Uncharted
      'tt18689424', //Batman v. Superman: El amanecer de la Justicia
      'tt0167260', //El señor de los anillos: El retorno del rey
      'tt8115900', //Los tipos malos
    ];
    this.publicidad = [
      'https://www.mundomarketing.com/wp-content/uploads/2017/09/Los-teens-se-aduenaron-de-Fanta.jpg',
      'https://storage.googleapis.com/www-paredro-com/uploads/2015/07/burger-king-paredro.jpg',
    ];
  }
  ngOnInit() {
    this.cargarPeliculas()
  }

  cargarPeliculas() {
    var i = 0;
    let timeID = setInterval(async () => {
      (await this.peliculaService.getMovie(this.idPeliculas[i])).subscribe((res) => {
        this.pelicula=new Pelicula()
        this.pelicula.id = res.id;
        this.pelicula.titulo = res.title;
        this.pelicula.rating = res.rating;
        this.pelicula.votos = res.rating_count;
        this.pelicula.popularidad = res.popularity;
        this.pelicula.duracion = res.runtime;
        this.pelicula.generos = res.generes;
        this.pelicula.descripcion = res.description;
        this.pelicula.imagen = res.image;
        this.pelicula.creacion = res.imdb_date;

        this.peliculas.push(this.pelicula);
      }
      );
      i++;
      if (i>=this.idPeliculas.length)
        clearInterval(timeID)
    }, 300);
  }
}
