import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorBookService {
  selectedBook: any = {};
  constructor() { }

  /**
   * Gets selected book from author.
   *
   * @param book Book object.
   */
  public selectedBookFromAuthor(book: any): void {
    this.selectedBook = book;
  }
}
