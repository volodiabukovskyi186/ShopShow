import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { AppLangService } from '../core/app-lang.service';
import { IFilters } from '../filter/filter.component';
import { filter } from 'rxjs/operators';
// import { IResponse } from "src/app/core/response";

interface IData {
  category: any;
  manufacturer: any;
  products: any[];
}

interface IProductResponse {
  count: number;
  skip: number;
  take: number;
  data: IData;
}

interface IProdArrtbutes {
  text: string;
  attribyte: {
    description: {
      name: string;
    };
  };
}

interface IProdArrtbutesResponce {
  id: number;
  attrybutes: Array<IProdArrtbutes>;
}

interface IProdReview {
  id: number;
  product_id: number;
  user_id: number;
  author: string;
  text: string;
  rating: number;
  status: number;
  created_at: string;
  updated_at: string;
}

interface IProdReviewResponse {
  data: Array<IProdReview>;
  count: number;
  skip: number;
  take: number;
}

@Injectable({
  providedIn: "root",
})
export class ProductService {
  attributes: IProdArrtbutesResponce = {
    id: null,
    attrybutes: [],
  };

  reviews: IProdReviewResponse = {
    count: 0,
    data: [],
    skip: 0,
    take: 5
  };

  item: any = {
    dedescriptions: [{}],
  };
  sallers: Array<any> = [];
  popular: Array<any> = [];

  page: number = 1;
  reviewPage: number = 1

  products: IProductResponse = {
    count: 0,
    data: { category: {}, manufacturer: {}, products: [] },
    skip: 0,
    take: 21,
  };

  takeNumber;
  productCount:number;
  currencyMove:string;
  constructor(private http: HttpClient, private appLang: AppLangService) {}

  getProducts(): Observable<any> {
    let skip = this.page * this.products.take - this.products.take;
    let lang = this.appLang.current;
    let params = `?lang=${lang}&skip=${skip}&take=${this.products.take}&sort_by=id`;
    return this.http.get(`${environment.products}${params}`)
  }

  getBy(categoryId: number) {
    let skip = this.page * this.products.take - this.products.take;
    let lang = this.appLang.current;
    let params = `?lang=${lang}&skip=${skip}&take=${this.products.take}&category_id=${categoryId}&sort_by=id`;
    return this.http.get<any>(environment.products + params);
  }

  getProdAttr(prodId: number) {
    let lang = this.appLang.current;
    let params = `?lang=${lang}`;
    return this.http.get<any>(
      environment.host + `client/getProductAttribytes/${prodId}` + params
    );
  }

  getProdReview(prodId: number) {

    let skip = this.page * this.reviews.take - this.reviews.take;
    let params = `?skip=${skip}&take=${this.reviews.take}`;

    return this.http.get<any>(
      environment.host + `client/getRewievsByProduct/${prodId}` + params
    );
  }

  getByManufacturer(manufacturerId: number) {
    let skip = this.page * this.products.take - this.products.take;
    let lang = this.appLang.current;
    let params = `?lang=${lang}&skip=${skip}&take=${this.products.take}&manufacturer_id=${manufacturerId}&sort_by=id`;
    return this.http.get<any>(environment.products + params);
  }



  getProductBy(id: number) {
    let lang = this.appLang.current;
    return this.http.get<any>(environment.products + `/${id}?lang=${lang}`);
  }
  //
  getPopular() {
    let take = 8;
    let lang = this.appLang.current;
    let params = `?lang=${lang}&skip=0&take=${take}&sort_by=products.id`;
    return this.http.get<any>(environment.products + params);
  }
  getSallers() {
    let take = 8;
    let lang = this.appLang.current;
    let params = `?lang=${lang}&skip=0&take=${take}&sort_by=rating`;
    return this.http.get<any>(environment.products + params);
  }

  search(q: string): Observable<any> {
    let skip = this.page * this.products.take - this.products.take;
    let lang = this.appLang.current;
    let params = `?skip=${skip}&take=${this.products.take}&q=${q}&lang=${lang}`;
    return this.http.get<any>(
        environment.host + `product/searchProduct` + params
    );
  }

  sortBy(value: string, cardNumber?: number) {

    const lang = this.appLang.current;
    let params = `?lang=${lang}&skip=0`;

    if (cardNumber) {
      this.takeNumber = cardNumber;
      params = `${params}&take=${this.takeNumber}`;
    }
    //const lang = this.appLang.current;
    //let params = `?lang=${lang}&skip=0&take=${this.takeNumber}`;

    if (value === 'rating') {
      params = `${params}&sort_by=rating`;
    }

    if (value === 'minPrice') {
      params = `${params}&sort_by=price&desc=ASC`;
    }

    if (value === 'maxPrice') {
      params = `${params}&sort_by=price&desc=DESC`;
    }

    // if (value === 'promotions') {
    //   params = `${params}`;
    // }


    return this.http.get<any>(
      environment.products + params
    );
  }
  getByFilters(filters: IFilters, count? :number ){

    let skip = this.page * this.products.take - this.products.take;
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
    return this.http.get<any>(environment.host + `client/getProductsByFilterClient` + params);
  }
  getByDiscount(): Observable <any>{
    let skip = this.page * this.products.take - this.products.take;
    let lang = this.appLang.current;
    let params = `?lang=${lang}&skip=${skip}&take=${this.products.take}&sort_by=id`;
    // return this.http.get(`${environment.products}${params}`)
    return this.http.get<any>(environment.host + `client/productsByDiscont${params}`);
  }


  postReview(reviewItem): Observable <any> {
    return this.http.post(`https://api.showu.com.ua/review`, reviewItem);
  }
  addProductToWishlist(data): Observable <any> {
    return this.http.post(`${environment.host}wishlist`, data);
  }
  getProdStorage(id:number): Observable <any> {
    return this.http.get(`https://api.showu.com.ua/stock_status/${id}`);
  }



}
