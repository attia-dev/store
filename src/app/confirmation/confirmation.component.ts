import { Component, OnInit } from '@angular/core';
import { CartProducts } from '../Models/cartProducts';
import { Customer } from '../Models/customer';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  cartProdcs:CartProducts[] =[];
  customer:any= new Customer;
  constructor(private cartServ:CartService) { }

  ngOnInit(): void {
    
    this.cartProdcs=this.cartServ.cartProducts;
    this.customer=this.cartServ.customer;
    this.cartServ.cartProducts=[];
    this.cartServ.customer= new Customer();
  
  }

  

}
