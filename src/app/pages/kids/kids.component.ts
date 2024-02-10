import { Component } from '@angular/core';
import {CalendarItem} from "../../model/calendar-item.model";
import {ImagesService} from "../../services/images.service";
import {HomeCarouselImagesService} from "../home/home-carousel-images.service";
import {CalendarService} from "../../services/calendar.service";
import {RouterLink} from "@angular/router";
import {CalendarComponent} from "../../components/calendar/calendar.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [ RouterLink, CalendarComponent, CommonModule],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.scss'
})
export class KidsComponent {

  carouselImages : string[] = [];
  numberOfImages : number = 0 ;
  animationDuration : string = '';
  calendarItems: CalendarItem[] = [
    new CalendarItem('Lundi', '18h00-19h30', 'Aréna Teddy Riner', 'Enfants'),
    new CalendarItem('Jeudi', '18h00-19h30', 'Aréna Teddy Riner', 'Enfants')
  ];

  constructor(
    private imagesService: ImagesService,
    private homeCarouselImagesService: HomeCarouselImagesService,
    private calendarService: CalendarService
  ) {
    this.calendarService.setCalendarItems(this.calendarItems);
  }

  ngOnInit(): void {

    this.homeCarouselImagesService.carouselImages$.subscribe((images) => {
      this.carouselImages = images;
      this.numberOfImages =  this.carouselImages.length;
      this.animationDuration = this.numberOfImages > 0 ? `${this.numberOfImages * 2}s` : '20s'
      this.imagesService.setAnimationDuration(this.animationDuration)
    });

    this.imagesService.getImagesList('carousel-home-images').subscribe((data) => {
      this.homeCarouselImagesService.setCarouselImages(data);
      this.imagesService.setImages(data);
      this.imagesService.setPath('home-carousel');
    });

  }


}
