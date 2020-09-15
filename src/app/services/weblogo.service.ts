import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

export interface dataSeqs{
  seqs?: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeblogoService {
  httpOptions = {};
  data: dataSeqs = {};

  constructor(private httpClient: HttpClient) { }

  send(seqsSend: string) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.data.seqs = seqsSend;
    return this.httpClient.post<any>('http://localhost:8000/weblogoclustal/', this.data, this.httpOptions);
  }
}
