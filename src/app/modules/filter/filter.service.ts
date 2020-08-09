import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AppLangService } from 'src/app/modules/core/app-lang.service';

export interface IPriceFilter {
  min: number;
  max: number;
}

export interface ICategoryFilterResponse {
  data: ICategoryFilter[];
}

export interface ICategoryFilter {
  id: number;
  name: string;
  sub: ICategoryFilter[];
}

@Injectable({
  providedIn: "root",
})
export class FilterService {
  // price: IPriceFilter = { min: 1, max: 100 };
  // priceModel: IPriceFilter = { min: 1, max: 100 };

  constructor(
    private http: HttpClient, 
    private appLang: AppLangService
  ) {}

  public getPriceFilter(): Observable<any> {
    return this.http.get<any>(environment.host + `client/getMinMaxPrice`);
  }

  public getManufactures(): Observable<any> {
    return this.http.get(environment.host + `client/manufacturers`);
  }

  public getCategory() : Observable<ICategoryFilterResponse> {
    let lang = this.appLang.current;
    let take = 100;
    return this.http.get<any>(environment.host + `client/category?take=${take}&lang=${lang}`);
  }
}
