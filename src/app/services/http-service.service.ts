import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  url = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public getData(endpoint: string, queryParams?: HttpParams): Observable<any> {
    return this.httpClient.get(this.url + endpoint, {params: queryParams});
  }

  public postData(endpoint: string, body: any): Observable<any> {
    return this.httpClient.post(this.url + endpoint, body);
  }

  public putData(endpoint: string, body: any, queryParams?: HttpParams): Observable<any> {
    return this.httpClient.put(this.url + endpoint, body);
  }

  public deleteData(endpoint: string, queryParams?: HttpParams): Observable<any> {
    return this.httpClient.delete(this.url + endpoint, {params: queryParams});
  }
}
