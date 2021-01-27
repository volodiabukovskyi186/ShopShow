import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AppLangService } from '../core/app-lang.service';
import {IFilters} from '../filter/filter.component';

export interface IManufacturer {
  code: number;
  description: string;
  id: number;
  image_id: number;
  meta_description: string;
  meta_keywords: string;
  name: string;
  rating: number;
  src: { src: string; src_mini: string };
  image: { src: string; src_mini: string };
  status: number;
}

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
export class ManufacturersService {
  list: Array<any> = [];
  count: number = 0;
  take: number = 20;
  page: number = 1;
  lang: string = "en";
  item: IManufacturer = {
    code: 0,
    description: null,
    id: 0,
    image_id: 0,
    meta_description: null,
    meta_keywords: null,
    name: null,
    rating: 0,
    src: {
      src: null,
      src_mini: null,
    },
    image: {
      src: null,
      src_mini: null,
    },
    status: 1,
  };

  takeNumber;
  productCount: number;
  currencyMove: string;
  // promotions: any = {
  //   count: 0,
  //   data: [],
  //   skip: 0,
  //   take: 20,
  // };
  products: IProductResponse = {
    count: 0,
    data: { category: {}, manufacturer: {}, products: [] },
    skip: 0,
    take: 10,
  };

  constructor(private http: HttpClient, private appLang: AppLangService) {}

  getByFilters(filters: IFilters, promotion?: number , count?: number ) {
    let skip = this.page * this.products.take - this.products.take;
    let lang = this.appLang.current;
    let params = `?lang=${lang}&skip=${skip}&sort_by=id`;

    if (count || this.productCount) {
      this.takeNumber = this.productCount;
      params +=`&take=${this.takeNumber}`;
    }
    if( filters.minPrice! > 0 ){
      params +=`&min=${filters.minPrice}`;
    }
    if( filters.maxPrice! > 0) {
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
    if (filters.categories.length > 0){
      params += `&category_id=${JSON.stringify(filters.categories)}`;
    }
    return this.http.get<any>(environment.host + `client/getProductsByFilterClient` + params + `&manufacturer_id=[${promotion}]`);
  }

  getManufactures(id): Observable<any>{
    return this.http.get<any>(environment.host + `client/getProductsByFilterClient?manufacturer_id=[${id}]`);
  }
  get(): Observable<any> {
    let skip = this.page * this.take - this.take;
    let lang = this.appLang.current;
    let params = `?lang=${lang}&skip=${skip}&take=${this.take}`;
    return this.http.get<any>(environment.manufacturers + params);
  }
  getBy(id: number): Observable<IManufacturer> {
    let lang = this.appLang.current;
    return this.http.get<any>(environment.manufacturers + `/${id}?lang=${lang}`);
  }
}
