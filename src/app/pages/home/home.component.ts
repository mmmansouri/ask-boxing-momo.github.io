import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouterLink } from "@angular/router";
import { CalendarComponent } from "../../components/calendar/calendar.component";
import { CommonModule } from "@angular/common";
import {ImagesService} from "../../services/images.service";
import {HomeCarouselImagesService} from "./home-carousel-images.service";

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

  constructor(
    private imagesService: ImagesService,
    private homeCarouselImagesService: HomeCarouselImagesService
  ) {}

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
