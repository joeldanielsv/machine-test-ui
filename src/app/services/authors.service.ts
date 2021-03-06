import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpService: HttpServiceService) { }

  /**
   * Gets the authors.
   */
  public getAuthors(): Promise<any> {
    return this.httpService.getData('authors').toPromise();
  }

  /**
   * Gets the author info.
   * 
   * @param authorId Author ID.
   */
  public getAuthorInfo(authorId: any): Promise<any> {
    const params = new HttpParams().set('id', authorId);
    return this.httpService.getData('authors', params).toPromise();
  }
}
