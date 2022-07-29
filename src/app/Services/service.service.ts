import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Product } from '../Models/Product';




@Injectable({
  providedIn: 'root'
})
export class ServiceService  {
  
  products:Product[]=[ ];
  private Url:string="/assets/data.json";

  constructor(private http:HttpClient) {
    http.get<[]>(this.Url).subscribe(x=>
      {
        this.products=x;
      }
      );
  }

  

  getAll()
  {
    return this.http.get<[]>(this.Url);
    
  }

 
}
