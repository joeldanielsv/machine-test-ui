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
  authors: any[] = [];
  info: any;
  selectedBook = new Subject();
  selectedBookObservable = this.selectedBook.asObservable();

  constructor(
      private authorsService: AuthorsService,
      private route: Router,
      private authorBookService: AuthorBookService
      ) { }

  ngOnInit(): void {
    this.showAuthors();
  }

  public showAuthors(): void {
    this.authorsService.getAuthors().then(authors => {
      this.authors = authors;
    }).catch(error => {
      alert('Unable to fetch authors');
    });
  }

  public showInfo(authorId: any): void {
    this.authorsService.getAuthorInfo(authorId).then(info => {
      this.info = info;
    }).catch(error => {
      alert('Unable to fetch info');
    });
  }

  public showBookDetails(book: any) {
    this.authorBookService.selectedBookFromAuthor(book);
    this.route.navigate(['../books']);
  }
}
