import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  list = [];

  constructor(private http: HttpClient) {}

  public encodeParamsNotNull(params: object): string {
    let body: string = "";
    for (let key in params) {
      if (
        params[key] != undefined &&
        params[key] != null &&
        params[key] != ""
      ) {
        if (body.length) {
          body += "&";
        }
        body += key + "=";
        body += encodeURIComponent(params[key]);
      }
    }
    return body;
  }

  get(l: string): Observable<any> {
    let data = {
      skip: 0,
      take: 100,
      lang: l,
    };

    return this.http.get<any>(
      environment.categories + "?" + this.encodeParamsNotNull(data)
    );
  }
}
