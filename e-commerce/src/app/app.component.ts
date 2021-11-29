import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {
  
  //constructor
  constructor(){
    //  console.log(this._selectedBook.selectedBookTitle);
  }

  //variables
  title = 'e-commerce';
  componentTitle = "";

  //custom methods

  //lifecycle hooks
  ngOnInit() { 
  }
  ngOnChanges(){
    console.log(this.componentTitle);
    // this._route.params.subscribe(params=>console.log(params));
  }
}
