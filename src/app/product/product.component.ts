import { Component, Input, OnInit } from '@angular/core';

import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:any;
  qty:number=1;
  
  constructor(private cartServ:CartService) { }

  ngOnInit(): void {
  }

  addToCart()
{
  this.cartServ.addToCart({product: this.product,qty:this.qty});
  
  
}

}

