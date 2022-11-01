import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  // URL:string="http://localhost:3000/orders";
  URL:string="https://my-json-server.typicode.com/nanditavora/bake-my-cake-server/orders";

  constructor(private http: HttpClient) { }

  add(order:Order) : Observable<Order>{
    return this.http.post<Order>(this.URL, order);
  
  }
}
