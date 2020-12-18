import { Injectable } from '@angular/core';
import {IFilters} from '../filter/filter.component';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AppLangService} from '../core/app-lang.service';
import {Observable} from 'rxjs';

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
  providedIn: 'root'
})
export class SalesService {
  takeNumber;
  productCount:number;
  currencyMove:string;

  products: IProductResponse = {
    count: 0,
    data: { category: {}, manufacturer: {}, products: [] },
    skip: 0,
    take: 3,
  };
  item: any = {
    dedescriptions: [{}],
  };
  sallers: Array<any> = [];
  page: number = 1;

  constructor(private http: HttpClient, private appLang: AppLangService) {}


  getByFiltersSale(filters: IFilters, count? :number ) {
      
    this.currencyMove=filters.sortPrice
    let skip = this.page * this.products.take - this.products.take;
    let lang = this.appLang.current;
    let params = `?lang=${lang}&skip=${skip}&sort_by=id`;
    if (count){
      this.productCount=count
      params +=`&take=${count}`;
    }
    if(this.productCount){
      params +=`&take=${this.productCount}`;
    }
    if( filters.minPrice >0 ){
      params +=`&min=${filters.minPrice}`
    }
    if(filters.maxPrice > 0 ){
      params +=`&max=${filters.maxPrice}`
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
    return this.http.get<any>(environment.host + `client/productsByDiscont` + params);
  }

}
