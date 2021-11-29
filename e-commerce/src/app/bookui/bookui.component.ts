import { Component, Input, EventEmitter, Output, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BooksDetailsService } from '../services/books-details.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bookui',
  templateUrl: './bookui.component.html',
  styleUrls: ['./bookui.component.css']
})
export class BookuiComponent implements OnInit, OnChanges {
  @Input() isShow: boolean = false;
  @Output() diplayShow: EventEmitter<boolean> = new EventEmitter();

  //constructor
  constructor(private router: Router, private _bookDetailsService: BooksDetailsService) { }

  //template variables
  allBooks: any;
  books: Book[] = [];
  dataShow: string = "Show More";

  //custom methods
  toDisplayShow = (event: Event, book:Book) => {
    this.diplayShow.emit(false);
    this.router.navigate([`home/{{${book._bookTitle}}}`]);
    this._bookDetailsService.setSelectedBook(book);
  }

  //lifeycle hooks
  ngOnInit(): void {
    this._bookDetailsService.getBooks().subscribe(data => {
      this.allBooks = data;
      this.books = this.allBooks.slice(0, 10);
    });
    // this.books = this.allBooks.slice(0, 10);
    console.log(this.allBooks);
  }
  ngOnChanges() {
    if (this.allBooks) {
      if (this.isShow) {
        this.books = this.allBooks;
      } else {
        this.books = this.allBooks.slice(0, 10);
      }
    }
  }

}


