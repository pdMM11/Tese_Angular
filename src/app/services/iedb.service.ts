import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class IedbService {
  httpOptions = {};
  result: any;
  data: any;

  constructor(private httpClient: HttpClient) { }

  send(method: string, sequence_text: string, window_size= 9) {
    // this.data = { method: method, sequence_text: sequence_text, window_size: window_size};
    // const dataString = 'method=' + method + '&sequence_text=' +  sequence_text + '&window_size=' + window_size;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    /**
    this.httpClient.post(`https://www.iedb.org/result_v3.php`, this.httpOptions);
    return this.httpClient.post<any>('http://tools-cluster-interface.iedb.org/tools_api/bcell/',
      this.data); // , this.httpOptions);
     */
    return this.httpClient.get<any>('http://localhost:8000/iedb/?method=' + method + '&sequence_text='
      + sequence_text + '&window_size=' + window_size); // , this.httpOptions);
  }
}
