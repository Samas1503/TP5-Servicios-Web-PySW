import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient) {}

  public  getMovie(id: string): Observable<any> {
    const httpOptions = {
      method: 'GET',
      params: {
        id: id,
      },
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com',
        //'X-RapidAPI-Key': 'f5bd839dc5msh43cdd353da82d74p17443cjsna0c6fb0266df',
        'X-RapidAPI-Key': '66917baf94msh12efde129da056ap13bb4ejsnca9a154e0e85',
      }),
    };
    return this.http.get(
      'https://movie-details1.p.rapidapi.com/imdb_api/movie/',
      httpOptions
    );
  }
}
