import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouterLink } from "@angular/router";
import { CalendarComponent } from "../../components/calendar/calendar.component";
import { CommonModule } from "@angular/common";
import {ImagesService} from "../../services/images.service";
import {HomeCarouselImagesService} from "./home-carousel-images.service";
import {CalendarService} from "../../services/calendar.service";
import {CalendarItem} from "../../model/calendar-item.model";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterLink, CalendarComponent, CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  carouselImages : string[] = [];
  numberOfImages : number = 0 ;
  animationDuration : string = '';
  calendarItems: CalendarItem[] = [
    new CalendarItem('Lundi', '18h00-19h30', 'Aréna Teddy Riner', 'Enfants'),
    new CalendarItem('Mardi', '19h00-21h00', 'Aréna Teddy Riner', 'Adultes'),
    new CalendarItem('Jeudi', '18h00-19h30', 'Aréna Teddy Riner', 'Enfants'),
    new CalendarItem('Jeudi', '19h30-21h30', 'Aréna Teddy Riner', 'Adultes'),
    new CalendarItem('Vendredi', '18h30-20h00', 'Gymnase Carpentier', 'Adultes'),
    new CalendarItem('Samedi', '12h00-14h00', 'Aréna Teddy Riner', 'Adultes'),
    new CalendarItem('Samedi', '18h00-20h00', 'Aréna Teddy Riner', '100% Feminines'),
    new CalendarItem('Dimanche', '10h30-12h00', 'Aréna Teddy Riner', '100% Feminines')
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
