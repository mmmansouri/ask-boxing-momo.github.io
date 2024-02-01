import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl = 'http://localhost:3000/api/'; // Update with the correct API endpoint

  constructor(private http: HttpClient) {}

  getImagesList(targetApi: string): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + targetApi);
  }

  getImageURL(targetApi: string, targetImage: string): string {
    return this.apiUrl + targetApi + '/' + targetImage;
  }
}
