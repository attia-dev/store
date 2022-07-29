import { Component, OnInit } from '@angular/core';
import { CartProducts } from '../Models/cartProducts';
import { Product } from '../Models/Product';

import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  
  constructor(private serv:ServiceService) {
    
   }

  ngOnInit(): void {
    this.serv.getAll().subscribe(res=>
      {
        this.products=res;
      }
      );
    
  }

  

}
