import { Component, OnInit } from '@angular/core';
import { CakeService } from '../services/cake.service';
import { Cake } from '../models/cake';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/order';

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css']
})
export class CakeDetailComponent implements OnInit {
  cakes: Cake = { price: 0 };
  constructor(private cakeservice: CakeService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.cakeservice.getCake(+id).subscribe({
        next: data => {
          this.cakes = data;
        },
        error: e => {
          alert("Network Error !! Please Try Again Later");
        }
      });
    });

  }
}

