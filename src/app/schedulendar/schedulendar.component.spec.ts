import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulendarComponent } from './schedulendar.component';

describe('SchedulendarComponent', () => {
  let component: SchedulendarComponent;
  let fixture: ComponentFixture<SchedulendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
