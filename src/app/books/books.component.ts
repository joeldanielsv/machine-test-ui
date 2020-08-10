import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { AuthorBookService } from '../services/author-book.service';
import { BookViewModal } from '../view-modal/books-view.modal';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  info: any;                       // Selected book info.
  sortByName = false;              // Sort by name boolean.
  sortByPrice = false;             // Sort by price boolean.
  booksView = new BookViewModal(); // Model to show books.

  constructor(private booksService: BooksService, private authorBookService: AuthorBookService) { }

  ngOnInit(): void {
    // 1. Loads the list of books.
    this.showBooks();
    // 2. Shows the selected book from authors listing.
    this.showSelectedBook();
  }

  /**
   * Loads the list of books.
   */
  public showBooks(): void {
    this.booksService.getBooks().then(books => {
      this.booksView.books = books;
      this.booksView.displayBooks = this.booksView.books;
    }).catch(error => {
      alert('Unable to load books');
    });
  }

  /**
   * Shows the selected book info.
   *
   * @param bookId Book ID.
   */
  public showInfo(bookId: any): void {
    this.booksService.getBookInfo(bookId).then(info => {
      this.info = info;
    }).catch(error => {
      alert('Unable to fetch info');
    });
  }

  /**
   * Shows the selected book from authors listing.
   */
  private showSelectedBook(): void {
    this.info = this.authorBookService.selectedBook;
  }

  /**
   * Searches the book by name.
   *
   * @param event Keyup event.
   */
  public searchByName(event: any): void {
    const searchText = event.target.value;
    this.booksView.searchByName(searchText);
  }

  /**
   * Sorts books by name.
   */
  public sortBooksByName(): void {
    this.sortByName = !this.sortByName;
    this.booksView.sort('bookName', this.sortByName);
  }

  /**
   * Sorts books by price.
   */
  public sortBooksByPrice(): void {
    this.sortByPrice = !this.sortByPrice;
    this.booksView.sort('bookPrice', this.sortByPrice);
  }

  /**
   * Filters books by price range.
   * 
   * @param from Lowest price.
   * @param to Highest price.
   */
  public filterPriceRange(from: string, to: string): void {
    if (from === '' || to === '') {
      this.booksView.displayBooks = this.booksView.books;
    } else {
      this.booksView.filterPriceRange(parseInt(from, 10), parseInt(to, 10));
    }
  }

  /**
   * Filters books by date range.
   *
   * @param from start date.
   * @param to end date.
   */
  public filterBooksByDate(from: any, to: any): void {
    const startDate = new Date(from.value);
    const endDate = new Date(to.value);
    console.log(startDate.getDate(), endDate);
    if (!isNaN(startDate.getDate()) && !isNaN(endDate.getDate())) {
      if (startDate > endDate) {
        alert('Start date should be less than end date');
      } else {
        this.booksView.filterBooksBydate(startDate, endDate);
      }
    } else {
      alert('Invalid date');
      this.booksView.displayBooks = this.booksView.books;
    }
  }

}
