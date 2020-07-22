import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AppLangService } from '../core/app-lang.service';
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
    take: 20
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
    take: 20,
  };

  constructor(private http: HttpClient, private appLang: AppLangService) {}

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
    let skip = this.reviewPage * this.reviews.take - this.reviews.take;
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
    return this.http.get<any>(environment.products + `/${id}`);
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
}
