import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeDashboardComponent } from './cake-dashboard/cake-dashboard.component';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';
// import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "cakes", component: CakeDashboardComponent
  },
  {
    path: "cakes/:id",
    component: CakeDetailComponent
  },
  {
    path: "",
    redirectTo: "/cakes",
    pathMatch: "full"
  },
  
    {
      path: "**",
      component: NotFoundComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
