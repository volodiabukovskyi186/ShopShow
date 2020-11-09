import { Injectable, Output, EventEmitter } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subject } from 'rxjs';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

export interface ILangItem {
  flag: string;
  name: string;
  locale?: string;
}

@Injectable({
  providedIn: "root",
})
export class AppLangService {
  public siteDefaultLang;

  @Output() updated: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    public translate: TranslateService,
    private http: HttpClient
  ) {
    //this.getDefaultLanguage();
    this.getSiteDefaultLang();
    this.init();
  }

  langs: Array<ILangItem> = [];

  getBrowserLang() {
    return this.translate.getBrowserLang();
  }

  use(language: string) {
    // get browser lang
    const browserLang = this.getBrowserLang();
    // if data["lang"] is null set browserLang
    let lang = language ?? browserLang;

    // set lang
    this.translate.use(lang.match(/en|pl|ua|ru/) ? lang : this.translate.defaultLang);
    console.log(this.translate.defaultLang);

    localStorage.setItem('current_lang', lang);

    this.updated.emit(lang);
    console.log("set lang:", lang);
  }

  public get routeLang(): string {
    return this.translate.currentLang != undefined &&
      this.translate.defaultLang != this.translate.currentLang
      ? this.translate.currentLang
      : "";
  }

  get current() {
    return this.translate.currentLang;
  }

  getLanguage(langName: string) {
    for (let i = 0; i < this.langs.length; i++) {
      const lang = this.langs[i];
      if (lang.name == langName) {
        return lang;
      }
    }
  }

  getDefaultLanguage(): Observable<any> {
    return this.http.get(`${environment.host}getDefaultLanguage`);
  }

  getSiteDefaultLang(): void {
    this.getDefaultLanguage().subscribe((res) => {
      this.siteDefaultLang = res.data.code;
    })
  }

  init() {
    // init langs
    const pl: ILangItem = { flag: "pl", name: "Polish", locale: "pl" };
    const en: ILangItem = { flag: "en", name: "English", locale: "en" };
    const ru: ILangItem = { flag: "ru", name: "Russian", locale: "ru" };
    const ua: ILangItem = { flag: "ua", name: "Ukraine", locale: "ua" };

    let defaultLang = localStorage.getItem('current_lang') || this.siteDefaultLang;

    this.langs = [pl, en, ua, ru];
    this.translate.addLangs([defaultLang, ua.locale]);
    this.translate.defaultLang = defaultLang;
    this.use(defaultLang);

    // this.getDefaultLanguage().subscribe((res) => {
    //   this.defaultLang = localStorage.getItem('current_lang') || res.data.code;

    //   this.translate.addLangs([this.defaultLang, en.locale]);
    //   this.translate.defaultLang = this.defaultLang;
    //   this.use(this.translate.defaultLang);

    //   console.log(this.translate.defaultLang);
    // })
  }
}
