import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MyReviewService {
  public myReviews: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public myReviews$: Observable<any> = this.myReviews.asObservable();
  public takeNumber: number;

  page: number = 1;

  products: any = {
    count: 0,
    skip: 0,
    take: 20,
  };


  constructor(private http: HttpClient) {} 

  // public getOrderById(id) {
  //   return this.http.get<any>(`${environment.host}order/${id}`);
  // }

  public getUserReviewsByClientId(clientId, cardNumber?: number, value?: string): Observable<any> {
    let skip = this.page * cardNumber - cardNumber;
    let params = `clientReviews/${clientId}`;

    if (skip) {
      params = `${params}?skip=${skip}`;
    }

    if (cardNumber) {
      this.takeNumber = cardNumber;
      params = `${params}?take=${this.takeNumber}`;
    }

    return this.http.get<any>(environment.host + params);
  }

//   public getOrdersList() {
//     this.myOrders$.subscribe((res) => {
//         console.log(res);
//     })
//   }
}
