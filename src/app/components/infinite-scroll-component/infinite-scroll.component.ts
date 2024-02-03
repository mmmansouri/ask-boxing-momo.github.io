import { Component } from '@angular/core';
import { ImagesService } from "../../services/images.service";
import { CommonModule } from "@angular/common";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-infinite-scroll',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './infinite-scroll-component.component.html',
  styleUrl: './infinite-scroll-component.component.scss'
})
export class InfiniteScrollComponent {

  carouselImages: string[] = []; // Add your image data here
  carouselPath: string = '';
  animationDuration: string = '';
  private imageListSubscription!: Subscription;
  private imagePath!: Subscription;
  private durationAnimation !: Subscription;

  constructor(
    private imagesService: ImagesService,) {}

  ngOnInit(): void {
    this.imageListSubscription = this.imagesService.imageList$.subscribe((images) => {
      this.carouselImages = images;
    });

    this.imagePath = this.imagesService.imagePath.subscribe((data) => {
      this.carouselPath = data;
    });

    this.durationAnimation = this.imagesService.animationDuration.subscribe((data) => {
      this.animationDuration = data;
    });
  }

  getImageURL(image: string): string {
    return this.imagesService.getImageURL(this.carouselPath, image);
  }

}
