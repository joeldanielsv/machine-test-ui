import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthorBookService } from '../services/author-book.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authors: any[] = [];                                       // Authors list.
  info: any;                                                 // Author info.
  selectedBook = new Subject();                              // Selected book subject.
  selectedBookObservable = this.selectedBook.asObservable(); // Selected book observable.

  constructor(
      private authorsService: AuthorsService,
      private route: Router,
      private authorBookService: AuthorBookService
      ) { }

  ngOnInit(): void {
    // 1. Gets the authors list and sets in view.
    this.showAuthors();
  }

  /**
   * Gets the authors list and sets in view.
   */
  public showAuthors(): void {
    this.authorsService.getAuthors().then(authors => {
      this.authors = authors;
    }).catch(error => {
      alert('Unable to fetch authors');
    });
  }

  /**
   * Shows selected author info.
   *
   * @param authorId Author ID.
   */
  public showInfo(authorId: any): void {
    this.authorsService.getAuthorInfo(authorId).then(info => {
      this.info = info;
    }).catch(error => {
      alert('Unable to fetch info');
    });
  }

  /**
   * Shows book detail of the author.
   *
   * @param book Book object.
   */
  public showBookDetails(book: any) {
    this.authorBookService.selectedBookFromAuthor(book);
    this.route.navigate(['../books']);
  }
}
