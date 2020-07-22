import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  data = [];
  review = []

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any>(environment.reviews);
  }
}
