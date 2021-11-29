import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { BookuiComponent } from './bookui/bookui.component';
import { BooksDetailsService } from './services/books-details.service';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { OrderedBooksService } from './services/ordered-books.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    CartComponent,
    BookuiComponent,
    BooksDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BooksDetailsService,OrderedBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
