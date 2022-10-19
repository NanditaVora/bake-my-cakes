import { Component, Input } from '@angular/core';
import { Cake } from './models/cake';
import { CakeService } from './services/cake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bake-my-cake';

  
  constructor() {}

}

