import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }
  //template variables
  dataShow: string = "Show More";
  show: boolean = false;
  displayShow_:boolean=true;
  isShow() {
    this.show = !this.show;
    this.dataShow = this.show ? "Show Less" : "Show More";
    return this.show;
  }
  displayShow(event:boolean){
    this.displayShow_=event;
  }
  
  ngOnInit(): void {
  }

}
