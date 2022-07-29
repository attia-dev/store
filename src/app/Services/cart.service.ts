import { Injectable } from '@angular/core';
import { CartProducts } from '../Models/cartProducts';
import { Customer } from '../Models/customer';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts:CartProducts[]=[];
  customer:Customer =new Customer();
  count:number=0;

  constructor() { }

  addToCart(cartProd:CartProducts)
  {
    if (this.cartProducts.find(x=>x.product.name===cartProd.product.name))
    {
      
      this.cartProducts[this.cartProducts.findIndex(x=>x.product.name===cartProd.product.name)].qty+=Number(cartProd.qty);
      alert(this.cartProducts.find(x=>x.product.name===cartProd.product.name)?.qty+" items of "+cartProd.product.name+" is added to cart");
    }
    else
    {
      this.cartProducts.push(cartProd);
      alert(this.cartProducts.find(x=>x.product.name===cartProd.product.name)?.qty+" items of "+cartProd.product.name+" is added to cart");
      this.calcAmount();
    }
    
  }

  removeFromCart(cartProd:CartProducts)
  {
    this.cartProducts=this.cartProducts.filter(x=>x.product!==cartProd.product);
    alert("you removed "+cartProd.product.name+" from the cart");
    this.calcAmount();
  }

  calcAmount()
  {
    this.count=0;
    this.cartProducts.map(x=>
      {
        this.count+=x.product.price * x.qty ; 
      });

      return this.count;

  }

}
