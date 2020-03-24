import { Component, OnInit, ViewChild } from '@angular/core';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-schedulendar',
  templateUrl: './schedulendar.component.html',
  styleUrls: ['./schedulendar.component.css']
})

export class SchedulendarComponent implements OnInit {

  @ViewChild('fullcalendar', {static: false}) calendarComponent: FullCalendarComponent;

  eventsModel: any;
  locales = [ptLocale];
  options: OptionsInput;
  calendarEvents: EventInput[] = [];
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];

  FullCalendarComponent;
  calendarVisible = true;
  calendarWeekends = true;

  constructor(){    
  }

  ngOnInit() {
    this.options = {
      editable: true,
      customButtons: {
        myCustomButton: {
          text: 'Do something!',
          click: function () {
            alert('clicked the custom button!');
          }
        }
      },
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      plugins: this.calendarPlugins
    };
  }

  eventRender(model: any): void {
    // model.el.className += ......
    model.el.innerHTML += '<span class="icon-close"></span>';
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  dateClick(arg) {
    console.log('handleDateClick: ', arg.dateStr);
    if (arg.dateStr!=undefined) {
      // add new event data. must create new array
      this.calendarEvents = this.calendarEvents.concat({ 
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }

  eventClick(evnt){
    console.log('eventClick! ', evnt.event);
  }

  modifyTitle(eventIndex, newTitle) {
    let calendarEvents = this.calendarEvents.slice(); // a clone
    let singleEvent = Object.assign({}, calendarEvents[eventIndex]); // a clone
    singleEvent.title = newTitle;
    calendarEvents[eventIndex] = singleEvent;
    this.calendarEvents = calendarEvents; // reassign the array
  }
}
