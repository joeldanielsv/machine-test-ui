import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  url = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  /**
   * GET request
   * @param endpoint Endpoint.
   * @param queryParams Query params.
   */
  public getData(endpoint: string, queryParams?: HttpParams): Observable<any> {
    return this.httpClient.get(this.url + endpoint, {params: queryParams});
  }

  /**
   * POST request.
   *
   * @param endpoint Endpoint.
   * @param body request body.
   */
  public postData(endpoint: string, body: any): Observable<any> {
    return this.httpClient.post(this.url + endpoint, body);
  }

  /**
   * PUT request.
   * 
   * @param endpoint Endpoint.
   * @param body Request body.
   * @param queryParams Query params.
   */
  public putData(endpoint: string, body: any, queryParams?: HttpParams): Observable<any> {
    return this.httpClient.put(this.url + endpoint, body);
  }

  /**
   * DELETE request.
   *
   * @param endpoint Endpoint.
   * @param queryParams Query params.
   */
  public deleteData(endpoint: string, queryParams?: HttpParams): Observable<any> {
    return this.httpClient.delete(this.url + endpoint, {params: queryParams});
  }
}
