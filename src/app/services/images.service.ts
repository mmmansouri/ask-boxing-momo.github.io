import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl = environment.imagesApiEndpoint;

  private carouselImages: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  private pathImages: BehaviorSubject<string> = new BehaviorSubject<string>('home-carousel');

  private durationAnimation  : BehaviorSubject<string> = new BehaviorSubject<string>('20s');

  public imageList$: Observable<string[]> = this.carouselImages.asObservable();

  public imagePath: Observable<string> = this.pathImages.asObservable();

  public animationDuration : Observable<string> = this.durationAnimation.asObservable();

  constructor(private http: HttpClient) {}

  getImagesList(targetApi: string): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + targetApi);
  }

  getImageURL(targetApi: string, targetImage: string): string {
    return this.apiUrl + targetApi + '/' + targetImage;
  }


  getImages(): string[] {
    return this.carouselImages.value;
  }

  setImages(images: string[]): void {
    this.carouselImages.next(images);
  }

  setPath(path: string): void {
    this.pathImages.next( path) ;
  }

  setAnimationDuration(animationDuration: string) {

    this.durationAnimation.next(animationDuration);

  }
}
