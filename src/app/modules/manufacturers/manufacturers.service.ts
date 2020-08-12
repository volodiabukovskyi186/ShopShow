import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AppLangService } from '../core/app-lang.service';

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

  constructor(private http: HttpClient, private appLang: AppLangService) {}

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
