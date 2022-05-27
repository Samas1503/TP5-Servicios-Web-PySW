import { Libro } from './../../models/libro';
import { ExamenService } from './../../services/examen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  libros!: Array<Libro>
  libro!: Libro
  nombre!: string;
  muestra: Libro | undefined

  constructor(private bookService:ExamenService) {
    this.libros = new Array<Libro>();
  }

  ngOnInit(): void {
  }

  buscarLibros(name: string) {
    name = name.replace(" ", "+")
    this.libros = new Array<Libro>();
    this.bookService.getLibros(name).subscribe(res => {
      res.forEach((_respuesta: any) => {
        this.libro = new Libro()
        this.libro.id = _respuesta.book_id;
        this.libro.titulo = _respuesta.name;
        this.libro.cover = _respuesta.cover
        this.libro.autores = _respuesta.authors;
        this.libros.push(this.libro)
      });
    })
  }

  mostrarLibro(libro: Libro) {
    this.muestra = new Libro();
    this.muestra=libro
  }

}
