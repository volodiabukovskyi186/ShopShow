import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable, Subject} from 'rxjs';
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

  SCategory=new Subject<boolean>()
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
    // return this.http.get<any>(environment.host + `client/category/16`);
  }
  getParentCategory(categoryId: number ): Observable <any> {
    let lang = this.appLang.current;
    return this.http.get<any>(environment.host + `category/getAllParent?category_id=${categoryId}&lang=${lang}`);
  }

  getSelectedCategory(categoryId: number): Observable<ICategoryFilterResponse>{
    let lang = this.appLang.current;
    let take = 100;
    if(categoryId==0){
      categoryId=7
    }

    console.log('categoryId',categoryId)


    return this.http.get<any>(environment.host + `client/category/${categoryId}?take=${take}&lang=${lang}`);
    // return this.http.get<any>(environment.host + `client/category?take=${take}&lang=${lang}`);
  }

  public getMinMaxPrice(): Observable<any> {
    return this.http.get(`${environment.host}client/getMinMaxPrice`);
  }
}
