import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BooksDetailsService } from '../services/books-details.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {
  book:any;
  constructor(private _route: ActivatedRoute, private _book: BooksDetailsService) {
  }
  //custom methods
  addToCart(){
    console.log("added to log");    
  }

  ngOnInit(){
    this._route.params.subscribe(param=>{
      this.book=this._book.selectedBook;      
    })
        
  }

}