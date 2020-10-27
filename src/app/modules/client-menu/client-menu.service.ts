import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, ObservableLike } from "rxjs";
import { AppLangService } from "../core/app-lang.service";

@Injectable({
  providedIn: "root",
})
export class ClientMenuService {
  listMain: Array<any> = [];
  listShop: Array<any> = [];
  listHelp: Array<any> = [];
  item: any = {};

  constructor(private http: HttpClient) {}

  getMain(l: string): Observable<any> {
    return this.http.get<any>(
      environment.host +
        `client/getMenuByType?lang=${l}&skip=0&take20&type=main`
    );
  }
  getHelp(l: string): Observable<any> {
    return this.http.get<any>(
      environment.host +
        `client/getMenuByType?lang=${l}&skip=0&take=20&type=help`
    );
  }
  getShop(l: string): Observable<any> {
    return this.http.get<any>(
      environment.host +
        `client/getMenuByType?lang=${l}&skip=0&take=20&type=shop`
    );
  }

  public sendSubscription(userData): Observable<any> {
    return this.http.post<any>(environment.host + `subscription_client`, userData);
  }
}
