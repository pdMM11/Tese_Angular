import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClustalService {
  httpOptions = {};
  result: any;
  data: any;
  res: any;

  constructor(private httpClient: HttpClient) { }

  send(url: string) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
      }),
    };
    return this.httpClient.get(url, this.httpOptions );
  }
}
