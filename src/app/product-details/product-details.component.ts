import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProducts } from '../Models/cartProducts';
import { Product } from '../Models/Product';


import { CartService } from '../Services/cart.service';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   id:number=0;
   cartProd:CartProducts=new CartProducts();
    product:any= new Product();
  constructor(private _Activatedroute:ActivatedRoute,private serv:ServiceService,private cartServ:CartService) { 
    
  }

  ngOnInit(): void {
    this.cartProd.qty=1;
    this.id=Number (this._Activatedroute.snapshot.paramMap.get("id"));
    
    this.product =this.serv.products.find(x=>x.id===this.id);
    
    
    
    
  }
  

  addToCart()
  {
    this.cartProd.product=this.product;
    this.cartServ.addToCart(this.cartProd);
    

  }

  

}
