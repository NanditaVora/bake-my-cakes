import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderService } from '../services/order.service';
import { RouteService } from '../services/route.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order = {};

  minDate:Date=new Date();

  constructor(private orderService: OrderService,
    private _snackBar: MatSnackBar,
    private router: RouteService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.orderService.add(this.order).subscribe({
      next: data => {
        this._snackBar.open('Order Request Submitted Successfully!! You will soon hear from us', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        })
        this.router.navigateToDashboard("");
      },
      error: (e) => {
        console.log(e);
        this._snackBar.open("Failed to Submit Order Request!! Please Try Again Later", "failure", {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        })
      }
    })
  }
}
