import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export interface IPriceFilter {
  min: number;
  max: number;
}

@Injectable({
  providedIn: "root",
})
export class FilterService {
  price: IPriceFilter = { min: 1, max: 100 };
  priceModel: IPriceFilter = { min: 1, max: 100 };

  constructor(private http: HttpClient) {}

  getPriceFilter(): Observable<any> {
    return this.http.get<any>(environment.host + `client/getMinMaxPrice`);
  }
}
