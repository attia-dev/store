import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartProducts } from '../Models/cartProducts';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  @Input() cartProd:CartProducts=new CartProducts();
  @Output() cartProductEmitter= new EventEmitter();

  constructor(private cartServ:CartService) { }

  ngOnInit(): void {
  }

  qtyChanged()
  {
    if (this.cartProd.qty<1||isNaN(this.cartProd.qty))
    alert("please enter valid quantity");
    else
    {
      this.cartServ.calcAmount();
      alert("you changed the qty of "+this.cartProd.product.name+" to "+this.cartProd.qty);
    }
    
  }

  

}
