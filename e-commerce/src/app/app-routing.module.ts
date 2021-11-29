import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},{
  path:'home',
  component:HomeComponent
},{
  path:'home/:id',
  component:BooksDetailsComponent
},{
  path:'myorders',
  component:OrdersComponent
},{
  path:'cart',
  component:CartComponent
},{
  path:'',
  component:HomeComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
