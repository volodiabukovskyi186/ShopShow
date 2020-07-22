import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export interface ICurrency {
  id: number;
  currency_title: string;
  code: string;
  value: number;
  status: number;
  default: number;
  simbol_left: string;
  simbol_right: string;
  decimal_places: number;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: "root",
})
export class CurrencyService {
  data: Array<ICurrency> = [];
  current: ICurrency;

  constructor(private http: HttpClient) {
    this.setDefault()
  }

  get(): Observable<any> {
    return this.http.get<any>(environment.host + `client/getCurrency`);
  }

  setDefault() {
    for (let i = 0; i < this.data.length; i++) {
      const c = this.data[i];
      if (c.default == 1) {
        this.current = c;
        return;
      }
    }
    this.current = {
      code: null,
      created_at: null,
      currency_title: "Default",
      decimal_places: null,
      default: null,
      id: 0,
      simbol_left: null,
      simbol_right: null,
      status: null,
      updated_at: null,
      value: 1,
    };
  }
}
