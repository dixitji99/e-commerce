import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../book';
// import { books } from '../books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksDetailsService {

  constructor(private _http: HttpClient) { }

  url: string = "https://61a32c52014e1900176deaf4.mockapi.io/books";

  selectedBook:any;
  // subject$ = new Subject<Book>();
  getBooks() {
    return this._http.get<Book>(this.url);
  }
  setSelectedBook(book:Book) {
    this.selectedBook=book;
  }
  getBook(id: number) {
    try {
      return this._http.get<Book>(`https://61a32c52014e1900176deaf4.mockapi.io/books/${id}`) 
    }
    catch (e) {
      return undefined;
    }
  }

}


