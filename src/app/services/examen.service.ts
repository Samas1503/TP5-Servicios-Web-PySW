import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  constructor(private http: HttpClient) {}

  public getLibros(name: string): Observable<any> {
    const httpOptions = {
      mmrthod: 'GET',
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
        'X-RapidAPI-Key': 'f5bd839dc5msh43cdd353da82d74p17443cjsna0c6fb0266df',
      }),
    };
    return this.http.get(
      'https://hapi-books.p.rapidapi.com/search/'+name,
      httpOptions
    );
  }
}
