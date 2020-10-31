import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) {

  }


  getSolical(): Observable<any> {
    return this.http.get(`https://api.showu.com.ua/site_socials?skip=0&take=20`);
  }


}
