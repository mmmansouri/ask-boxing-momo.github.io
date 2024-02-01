import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl = '/api/carousel-home-images'; // Update with the correct API endpoint

  constructor(private http: HttpClient) {}

  getImagesList(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
