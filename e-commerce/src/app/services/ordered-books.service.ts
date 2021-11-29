import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderedBooksService{

  cartUrl: string = "https://61a32c52014e1900176deaf4.mockapi.io/cart";
  checkoutUrl: string = "https://61a32c52014e1900176deaf4.mockapi.io/checkout";
  ordersUrl: string = "https://61a32c52014e1900176deaf4.mockapi.io/orders";

  constructor(private _http:HttpClient) { }

  getOrderDetails(){
    return this._http.get(this.ordersUrl);
  }
  addTOCart(book:any)
  {
    this._http.post(this.cartUrl,book);
  }
}
