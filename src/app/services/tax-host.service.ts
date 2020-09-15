import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaxHostService {
  API_URL = 'http://localhost:8000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      // 'Authorization': 'my-auth-token'
    }),
  };

  constructor(private httpClient: HttpClient) {
  }

  getFirstPage(idtaxonomy = '2', search = '', page = 1) {
    if (search === '') {
      return this.httpClient.get(`${this.API_URL}/taxhost/?idtaxonomy=` + String(idtaxonomy));
    } else {
      return this.httpClient.get(`${this.API_URL}/taxhost/?search=` + String(search) + '&page=' + String(page));
    }
  }

  add(data): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}/taxhost/`,
      data);
  }

  put(data, id: number): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}/taxhost/` + id + '/',
      data);
  }

  addHost(data): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}/host/`,
      data);
  }

  putHost(data, id: number): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}/host/` + id + '/',
      data);
  }

  receive_all(search: string, idtax: string) {
    return this.httpClient.get(`${this.API_URL}/taxhost/save/?search=` + search + '&idtaxonomy=' + idtax);
  }

  send(data: object) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.post<any>('http://localhost:8000/save_taxhost_results/', data, this.httpOptions);
  }
}
