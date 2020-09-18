import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MyOrdersService {
  public myOrders: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public myOrders$: Observable<any> = this.myOrders.asObservable();
  public takeNumber: number;

  constructor(private http: HttpClient) {} 

  public getOrderById(id) {
    return this.http.get<any>(`${environment.host}order/${id}`);
  }

  public getUserOrdersByClientId(clientId, cardNumber?: number, value?: string): Observable<any> {
    let params = `clientOrders/${clientId}`;

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
