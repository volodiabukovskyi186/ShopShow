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

  constructor(private http: HttpClient) {} 

  public getOrderById(id) {
    return this.http.get<any>(`${environment.host}order/${id}`);
  }

//   public getOrdersList() {
//     this.myOrders$.subscribe((res) => {
//         console.log(res);
//     })
//   }
}
