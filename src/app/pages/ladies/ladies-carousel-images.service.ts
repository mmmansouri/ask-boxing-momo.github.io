import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LadiesCarouselImagesService {

  private carouselImagesSubject = new BehaviorSubject<string[]>([]);

  carouselImages$: Observable<string[]> = this.carouselImagesSubject.asObservable();

  setCarouselImages(images: string[]): void {
    this.carouselImagesSubject.next(images);
  }
}
