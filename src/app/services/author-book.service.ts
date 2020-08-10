import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorBookService {
  selectedBook: any = {};
  constructor() { }

  public selectedBookFromAuthor(book: any): void {
    this.selectedBook = book;
  }
}
