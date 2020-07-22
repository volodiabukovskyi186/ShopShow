import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import { IResponse } from "src/app/core/response";
import { IPromotion } from "./promotion";
import { AppLangService } from "../core/app-lang.service";

@Injectable({
  providedIn: "root",
})
export class SallersService {
  sales: any = [];
  item: any;

  page: number = 1;
  lang: string = "en";

  promotions: any = {
    count: 0,
    data: [],
    skip: 0,
    take: 20,
  };

  constructor(private http: HttpClient, private appLang: AppLangService) {}

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
    return this.http.get<any>(environment.productPromotion + params);
  }
}
