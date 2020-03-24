import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulendarComponent } from './components/schedulendar/schedulendar.component';

const routes: Routes = [
  { path: '', component: SchedulendarComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
