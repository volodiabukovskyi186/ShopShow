import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import { IResponse } from "src/app/core/response";
import { IPromotion } from "./promotion";
import { AppLangService } from "../core/app-lang.service";
import {IFilters} from '../filter/filter.component';

interface IProductResponse {
  count: number;
  skip: number;
  take: number;
  data: IData;
}
interface IData {
  category: any;
  manufacturer: any;
  products: any[];
}
@Injectable({
  providedIn: "root",
})
export class SallersService {
  sales: any = [];
  item: any;

  page: number = 1;
  lang: string = "en";


  takeNumber;
  productCount:number;
  currencyMove:string;
  promotions: any = {
    count: 0,
    data: [],
    skip: 0,
    take: 20,
  };

  constructor(private http: HttpClient, private appLang: AppLangService) {}
  getPromotion(id): Observable<any>{
    return this.http.get<any>(environment.host + `client/getProductsByFilterClient?promotions=[${id}]`);
  }
  getByFilters(filters: IFilters, promotion? : number , count? : number ){
    let skip = this.page * this.promotions.take - this.promotions.take;
    let lang = this.appLang.current;
    let params = `?lang=${lang}&skip=${skip}&sort_by=id`;
    if (count || this.productCount) {
      this.takeNumber = this.productCount;
      params +=`&take=${this.takeNumber}`;
    }
    if(filters.minPrice!==0){
      params +=`&min=${filters.minPrice}`;
    }
    if(filters.maxPrice!==0){
      params +=`&max=${filters.maxPrice}`;
    }
    if (this.currencyMove === 'rating') {
      params = `${params}&sort_by=rating`;
    }
    if (this.currencyMove === 'minPrice') {
      params = `${params}&sort_by=price&desc=ASC`;
    }
    if (this.currencyMove === 'maxPrice') {
      params = `${params}&sort_by=price&desc=DESC`;
    }
    if (filters.manufacturers.length > 0){
      params += `&manufacturer_id=${JSON.stringify(filters.manufacturers)}`;
    }
    if (filters.categories.length > 0){
      params += `&category_id=${JSON.stringify(filters.categories)}`;
    }
    return this.http.get<any>(environment.host + `client/getProductsByFilterClient` + params + `&promotions=[${promotion}]`);
  }
  getProm() {
    let skip = this.page * this.promotions.take - this.promotions.take;
    let lang = this.appLang.current;

    let params = `?lang=${lang}&skip=${skip}&take=${this.promotions.take}`;
    // return this.http.get<any>(environment.data + `/promotions.json`);
    return this.http.get<any>(environment.promotion + params);
  }
  getSales() {
    return this.http.get<any>(environment.data + `/sales.json`);
  }
  getBy(id: number): Observable<any> {
    let lang = this.appLang.current;
    let params = `/${id}?lang=${lang}`;
    console.log(environment.productPromotion + params);
    return this.http.get<any>(environment.productPromotion + params);
  }
}
