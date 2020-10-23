import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, ObservableLike } from "rxjs";
import { environment } from "src/environments/environment";
import { AppLangService } from '../../core/app-lang.service';

@Injectable({
  providedIn: "root",
})

export class UIService {
  constructor(
    private http: HttpClient,
    public appLang: AppLangService
  ) {}

  getSiteSettingsValues(): Observable<any> {
    return this.http.get<any>(`${environment.host}site/getByLang`);
  }

  getSiteDescriptions(): Observable<any> {
    let lang = this.appLang.current;
    return this.http.get<any>(`${environment.host}site_description/getByLang?lang=${lang}`);
  }
}
