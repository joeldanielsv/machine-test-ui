import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpService: HttpServiceService) { }

  /**
   * Gets the books.
   */
  public getBooks(): Promise<any> {
    return this.httpService.getData('books').toPromise();
  }

  /**
   * Gets the book info.
   * 
   * @param bookId Book ID.
   */
  public getBookInfo(bookId: any): Promise<any> {
    const params = new HttpParams().set('id', bookId);
    return this.httpService.getData('books', params).toPromise();
  }
}
