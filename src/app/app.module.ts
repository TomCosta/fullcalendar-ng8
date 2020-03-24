import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulendarComponent } from './components/schedulendar/schedulendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

@NgModule({
  declarations: [
    AppComponent,
    SchedulendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule // for FullCalendar!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
