import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingComponent } from './tracking/tracking.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {
    path: ':id',
    component: TrackingComponent
  },
  {
    path: 'page/thankyou',
    component: ThankyouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
