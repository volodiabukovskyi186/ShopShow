import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AppLangService } from "../core/app-lang.service";

export interface IClientPageDescription {
  id: number;
  page_id: number;
  lang_id: number;
  title: string;
  description: string;
  meta_description: string;
  meta_keywords: string;
  text: string;
  created_at: string;
  updated_at: string;
}
export interface IClientPage {
  id: number;
  status: number;
  alias: string;
  created_at: string;
  updated_at: string;
  description: IClientPageDescription;
}

@Injectable({
  providedIn: "root",
})
export class ClientPageService {
  page: IClientPage;

  constructor(private http: HttpClient, private appLang: AppLangService) {}

  getByAlias(alias: string): Observable<any> {
    let lang = this.appLang.current;
    return this.http.get<any>(
      environment.host + `client/getPageByAlias?alias=${alias}&lang=${lang}`
    );
  }
}
