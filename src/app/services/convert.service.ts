import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConvertService {
  
  constructor(private http: HttpClient) {}

  public getCurrecy(have: string, want: string, amount: number):Observable<any>{
    const httpOptions = {
      mmrthod:"GET",
      params: {
        "have": have,
        "want": want,
        "amount": amount
      },
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
        'X-RapidAPI-Key': 'f5bd839dc5msh43cdd353da82d74p17443cjsna0c6fb0266df',
      }),
    };
    return this.http.get(
      'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',httpOptions
    );
  }
}
