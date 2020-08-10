import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { AuthorBookService } from '../services/author-book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: any[] = [];
  info: any;
  displayBooks: any[] = [];

  constructor(private booksService: BooksService, private authorBookService: AuthorBookService) { }

  ngOnInit(): void {
    this.showBooks();
    this.showSelectedBook();
  }

  public showBooks(): void {
    this.booksService.getBooks().then(books => {
      this.books = books;
      this.displayBooks = this.books;
    }).catch(error => {
      alert('Unable to load books');
    });
  }

  public showInfo(bookId: any): void {
    this.booksService.getBookInfo(bookId).then(info => {
      this.info = info;
    }).catch(error => {
      alert('Unable to fetch info');
    });
  }

  private showSelectedBook(): void {
    this.info = this.authorBookService.selectedBook;
  }

  public searchByNameOrDate(event: any): void {
    const searchText = event.target.value;
    if (searchText !== '') {
      this.displayBooks = this.books.filter(book => book.bookName.toLowerCase().search(searchText.toLowerCase()) !== -1);
    } else {
      this.displayBooks = this.books;
    }
  }
}
