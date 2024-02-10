import { Component } from '@angular/core';
import { ImagesService } from "../../services/images.service";
import { LadiesCarouselImagesService } from "./ladies-carousel-images.service";
import {CalendarItem} from "../../model/calendar-item.model";
import {HomeCarouselImagesService} from "../home/home-carousel-images.service";
import {CalendarService} from "../../services/calendar.service";
import {RouterLink} from "@angular/router";
import {CalendarComponent} from "../../components/calendar/calendar.component";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-ladies',
  standalone: true,
  imports: [ RouterLink, CalendarComponent, CommonModule],
  templateUrl: './ladies.component.html',
  styleUrl: './ladies.component.scss'
})
export class LadiesComponent {

  carouselImages : string[] = [];
  numberOfImages : number = 0 ;
  animationDuration : string = '';
  calendarItems: CalendarItem[] = [
    new CalendarItem('Samedi', '18h00-20h00', 'Aréna Teddy Riner', '100% Feminines'),
    new CalendarItem('Dimanche', '10h30-12h00', 'Aréna Teddy Riner', '100% Feminines')
  ];

  constructor(
    private imagesService: ImagesService,
    private ladiesCarouselImagesService: HomeCarouselImagesService,
    private calendarService: CalendarService
  ) {
    this.calendarService.setCalendarItems(this.calendarItems);
  }


  ngOnInit(): void {
    this.ladiesCarouselImagesService.carouselImages$.subscribe((images) => {
      this.carouselImages = images;
      this.numberOfImages =  this.carouselImages.length;
      this.animationDuration = this.numberOfImages > 0 ? `${this.numberOfImages * 2}s` : '20s'
      this.imagesService.setAnimationDuration(this.animationDuration)
    });

    this.imagesService.getImagesList('carousel-women-images').subscribe((data) => {
      this.ladiesCarouselImagesService.setCarouselImages(data);
      this.imagesService.setImages(data);
      this.imagesService.setPath('women-carousel');
    });
  }

}
