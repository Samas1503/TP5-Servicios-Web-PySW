import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranstaleService {
  
  constructor(private http: HttpClient) { }
  
  public async translateText(source: string, target: string, text: string): Promise<Observable<any>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
        //'X-RapidAPI-Key': '75a0bd75fbmsh188069af6b38a4fp1ceb8ajsn3cdb75799824', //cuenta de google 3
        'X-RapidAPI-Key': '66917baf94msh12efde129da056ap13bb4ejsnca9a154e0e85', //cuenta de google 2
        //'X-RapidAPI-Key': 'f5bd839dc5msh43cdd353da82d74p17443cjsna0c6fb0266df', //cuenta degoogle 1
      }),
    };
    const body = {
      "q": text,
      "source": source,
      "target": target
    }
    return await this.http.post(
      'https://deep-translate1.p.rapidapi.com/language/translate/v2',
      JSON.stringify(body),
      httpOptions
    );
  }
}
