import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiqpayService {

  constructor(private http: HttpClient) { }
  liqpayPost(): Observable<any> {
    console.log('someNEwsdka==>')
    const liq = {
      data:'eyJwdWJsaWNfa2V5Ijoic2FuZGJveF9pMjMzNDYxNzc2ODYiLCJ2ZXJzaW9uIjoiMyIsImFjdGlvbiI6InBheSIsImFtb3VudCI6MSwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6IlBheW1lbnQifQ==',
      signature:'v3Xf0Y2HfjzOHO0i90Ux9s1x6LI=',
    };
    return this.http.post(`https://www.liqpay.ua/api/request`, liq);
}
}
