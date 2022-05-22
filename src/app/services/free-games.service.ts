import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FreeGamesService {
  constructor(private http: HttpClient) {}

  public getGame(id: number): Observable<any> {
    const httpOptions = {
      method: 'GET',
      params: new HttpParams().append('id', id),
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': 'f5bd839dc5msh43cdd353da82d74p17443cjsna0c6fb0266df',
      }),
    };
    return this.http.get(
      'https://free-to-play-games-database.p.rapidapi.com/api/game',
      httpOptions
    );
  }
}
