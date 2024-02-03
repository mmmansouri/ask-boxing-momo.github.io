import { Component } from '@angular/core';
import { ImagesService } from "../../services/images.service";
import { LadiesCarouselImagesService } from "./ladies-carousel-images.service";


@Component({
  selector: 'app-ladies',
  standalone: true,
  imports: [],
  templateUrl: './ladies.component.html',
  styleUrl: './ladies.component.scss'
})
export class LadiesComponent {

  carouselImages : string[] = [];
  numberOfImages : number = 0 ;
  animationDuration : string = '';

  constructor(
    private imagesService: ImagesService,
    private ladiesCarouselImagesService: LadiesCarouselImagesService
  ) {}

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
