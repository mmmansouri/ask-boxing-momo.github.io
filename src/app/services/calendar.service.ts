import { Injectable } from '@angular/core';
import { CalendarItem } from "../model/calendar-item.model";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private calendarItems: CalendarItem[] = [];

  getCalendarItems(): CalendarItem[] {
    return this.calendarItems;
  }

  setCalendarItems(calendarItems: CalendarItem[]){
    this.calendarItems = calendarItems;
  }
  addCalendarItem(calendarItem: CalendarItem){
    this.calendarItems.push(calendarItem);
  }
}
