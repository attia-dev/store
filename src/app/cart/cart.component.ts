import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProducts } from '../Models/cartProducts';
import { Customer } from '../Models/customer';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProdcs:CartProducts[] =[];
  customer:Customer= new Customer();
  count:number=0;

  constructor(public cartServ:CartService,private route:Router) { }

  ngOnInit(): void {
    this.cartProdcs=this.cartServ.cartProducts;

    
  }

  onSubmit(){
    
    
    this.cartServ.customer=this.customer;
    
    this.cartServ.cartProducts.map(x=>
      {
        this.count+=x.product.price * x.qty ; 
      });

      this.cartServ.customer.count=this.count;
     
      

    
    this.route.navigate(['/Confirmation']);
  }

  removeCartProduct(cartP:CartProducts)
  {
    this.cartProdcs=this.cartProdcs.filter(x=>x.product!==cartP.product);
    this.cartServ.removeFromCart(cartP);
    
  }

  

 
}
