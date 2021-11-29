import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { BooksDetailsService } from '../services/books-details.service';
import { OrderedBooksService } from '../services/ordered-books.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderedBooks: OrderedBooksService) { }
  @Output() componentData: EventEmitter<Object> = new EventEmitter();

  orderedBook:any;

  componentDataObj = {
    title: "My Orders"
  }
  sendComponentData = () => {
    this.componentData.emit(this.componentDataObj)
  }

  ngOnInit(): void {
    this.orderedBooks.getOrderDetails().subscribe(data => {
      // console.log(data);
      this.orderedBook=data;
      // this.orderedBook.slice(0, 5);
    });
  }


}
