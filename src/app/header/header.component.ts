import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  cakes: Array<Cake> = [];
  birthdayGifts = ["Birthday Cakes", "Personalized Cakes", "New Arrivals", "Best Sellers"];
  occassion = ["Happy Birthday", "Thank You", "Congratulations", "Sorry", "Get Well Soon", "Best Wishes"];

  constructor(private cakeService: CakeService) { }

  ngOnInit(): void {

  }

  onSearchTextChanged(cakeName: string) {

    this.searchTextChanged.emit(cakeName);

    // this.cakeService.getCakes(cakeName).subscribe({
    //   next: data => {
    //     this.cakes = data;
    //   },
    //   error: e => {
    //     alert("Network Error !! Please Try Again Later");
    //   }
    // })
  }
}
