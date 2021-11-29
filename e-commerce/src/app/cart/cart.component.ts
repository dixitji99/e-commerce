import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  //variables
  emptyCart: boolean = false;
  quantityValue: number = 1;

  //custom method
  addQuant() {
    ++this.quantityValue;
  }
  subQuant() {
    if (this.quantityValue > 1)
      --this.quantityValue;
  }
  cancelOrder(){
    let x=confirm("Are you sure to cnacel order?");
    console.log(x);
  }

  ngOnInit(): void {
  }

}
