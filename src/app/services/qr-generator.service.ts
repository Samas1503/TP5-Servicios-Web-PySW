import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QrGeneratorService {
  constructor(private http: HttpClient) { }

  public getQr(text: string): Observable<any> {
    const httpOptions = {
      method: 'GET',
      params: {
        text: text,
      },
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'qr-generator-api.p.rapidapi.com',
        'X-RapidAPI-Key': '75a0bd75fbmsh188069af6b38a4fp1ceb8ajsn3cdb75799824', //cuenta de google 3
        //'X-RapidAPI-Key': '66917baf94msh12efde129da056ap13bb4ejsnca9a154e0e85', //cuenta de google 2
        //'X-RapidAPI-Key': 'f5bd839dc5msh43cdd353da82d74p17443cjsna0c6fb0266df', //cuenta degoogle 1
      }),
    };
    return this.http.get(
      'https://qr-generator-api.p.rapidapi.com/api/qrcode/generate',
      httpOptions
    );
  }
}
