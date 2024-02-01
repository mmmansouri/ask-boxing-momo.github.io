import {Component, OnInit} from '@angular/core';
import { RouterLink } from "@angular/router";
import { CalendarComponent } from "../../components/calendar/calendar.component";

import { CommonModule } from "@angular/common";
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterLink, CalendarComponent, CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  carouselImages : string[] = [];


  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    /*this.imagesService.getImagesList().subscribe((data) => {
      this.carouselImages = data;
    });*/
  }

  getImagePath(image: string): string {
    console.log(this.carouselImages)
    return `assets/${image}`;
  }
}
