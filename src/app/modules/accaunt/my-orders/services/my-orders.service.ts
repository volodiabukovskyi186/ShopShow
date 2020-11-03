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

  page: number = 1;

  products: any = {
    count: 0,
    skip: 0,
    take: 10,
  };


  constructor(private http: HttpClient) {}

  public getOrderById(id) {
    return this.http.get<any>(`${environment.host}order/${id}`);
  }

  public getUserOrdersByClientId(clientId, cardNumber?: number, value?: string): Observable<any> {
    let skip = this.page * cardNumber - cardNumber;
    let params = `clientOrders/${clientId}`;
    let lang = localStorage.getItem('current_lang');
    if (skip) {
      params = `${params}?skip=${skip}`;
    }
    if (cardNumber) {
      this.takeNumber = cardNumber;
      params = `${params}?&take=${this.takeNumber}`;

    }
    return this.http.get<any>(`${environment.host + params}&lang=${lang}`);
  }
  getProdStatus(id: number, lang: any ): Observable <any> {
    return this.http.get(`https://api.showu.com.ua/order/client/${id}?lang=${lang}`);
  }

//   public getOrdersList() {
//     this.myOrders$.subscribe((res) => {
//         console.log(res);
//     })
//   }
}
