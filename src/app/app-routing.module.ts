import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';


const routes: Routes = [
  { path: 'books', component: BooksComponent},
  { path: 'authors', component: AuthorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
