import { Component, Input, OnInit } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-cake-dashboard',
  templateUrl: './cake-dashboard.component.html',
  styleUrls: ['./cake-dashboard.component.css']
})
export class CakeDashboardComponent implements OnInit {

  @Input()
  cakes: Cake[] = [];

  constructor(private cakeService: CakeService) { }

  ngOnInit(): void {
    this.cakeService.getCakes("").subscribe({
      next: data => {
        this.cakes = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
  }

  filterItems(value: string) {
    if (value === "")
      this.cakeService.getCakes(value).subscribe({
        next: data => {
          this.cakes = data;
        },
        error: e => {
          alert("Network Error !! Please Try Again Later");
        }
      });
    else
      this.cakeService.getCakes(value).subscribe({
        next: data => {
          this.cakes = data;
        },
        error: e => {
          alert("Network Error !! Please Try Again Later");
        }
      });
  }
}
