import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeezerService {
  constructor(private http: HttpClient) {}

  public getCanciones(name: string): Observable<any> {
    const httpOptions = {
      mmrthod: 'GET',
      params: new HttpParams({}).set('q', name),
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': 'f5bd839dc5msh43cdd353da82d74p17443cjsna0c6fb0266df',
      }),
    };
    return this.http.get(
      'https://deezerdevs-deezer.p.rapidapi.com/search',
      httpOptions
    );
  }
}
