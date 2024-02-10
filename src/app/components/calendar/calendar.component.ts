import { Component } from '@angular/core';
import { CalendarItem } from "../../model/calendar-item.model";
import { CalendarService } from "../../services/calendar.service";
import { CommonModule } from "@angular/common";


interface GroupedCalendarItems {
  day: string;
  items: CalendarItem[];
}


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

 calendar: CalendarItem[] = [];
 groupedCalendarItems: GroupedCalendarItems[] = [];

 constructor(private calendarService: CalendarService) {
   this.calendar = calendarService.getCalendarItems();
   this.groupCalendarItemsByDay(this.calendar);
 }

  groupCalendarItemsByDay(calendarItems: CalendarItem[]) {
    const groups: { [key: string]: CalendarItem[] } = {};
    calendarItems.forEach(item => {
      if (!groups[item.day]) {
        groups[item.day] = [];
      }
      groups[item.day].push(item);
    });

    // Mark the last item in each group
    Object.values(groups).forEach(items => {
      if (items.length) {
        items[items.length - 1].isLastInGroup = true; // Assuming you can add this property
      }
    });

    this.groupedCalendarItems = Object.keys(groups).map(day => ({
      day,
      items: groups[day]
    }));
  }

}
