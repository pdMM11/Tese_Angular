import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MlPredictService {
  httpOptions = {};
  result: any;
  data: any;

  constructor(private httpClient: HttpClient) { }

  send(method: string, sequence_text: string, window_size= 15, gap = 1, model = 'svm') {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get<any>('http://localhost:8000/ml_predict/?sequence=' + sequence_text
      + '&window_size=' + window_size +  '&gap=' + gap + '&model=' + model) ; // , this.httpOptions);
  }
  writeFile(text: object): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.post<any>('http://localhost:8000/save_ml_results/', text, this.httpOptions);
  }
}
