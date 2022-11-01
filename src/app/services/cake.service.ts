import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 7
import { Observable } from 'rxjs';
import { Cake } from '../models/cake';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  // URL: string = "http://localhost:3000/cakes";
  URL: string = "https://my-json-server.typicode.com/nanditavora/bake-my-cake-server/cakes";

  cakes: Array<Cake> = [];
  constructor(private http: HttpClient) { 
    this.getCakes("").subscribe({
      next: data => {
        this.cakes = data;
      }
    })
  }
  getCakes(searchText: string): Observable<Array<Cake>> {
    if(searchText || searchText != "")
      return this.http.get<Array<Cake>>(`${this.URL}?category=${searchText}`);
    else
      return this.http.get<Array<Cake>>(`${this.URL}`);
  }


  getCake(id?: number): Observable<Cake> {
    return this.http.get<Cake>(`${this.URL}/${id}`);
  }

}
