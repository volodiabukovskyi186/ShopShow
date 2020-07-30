import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AppLangService } from "../core/app-lang.service";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  list: Array<any> = [];

  constructor(private http: HttpClient, private appLang: AppLangService) {}

  search(q: string): Observable<any> {
    let skip = 0,
        take = 20;
    let lang = this.appLang.current;
    let params = `?skip=${skip}&take=${take}&q=${q}`;
    return this.http.get<any>(
      environment.host + `product/searchProduct` + params
    );
  }
}
