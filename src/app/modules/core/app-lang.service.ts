import { Injectable, Output, EventEmitter } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subject } from 'rxjs';

export interface ILangItem {
  flag: string;
  name: string;
  locale?: string;
}

@Injectable({
  providedIn: "root",
})
export class AppLangService {
  

  @Output() updated: EventEmitter<any> = new EventEmitter<any>()

  constructor(public translate: TranslateService) {
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

    this.updated.emit(lang);
    console.log("set lang:", lang);

    // set lang
    this.translate.use(lang.match(/en|pl|ua|ru/) ? lang : this.translate.defaultLang);
    localStorage.setItem('current_lang', lang);
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

  init() {
    // init langs
    const pl: ILangItem = { flag: "🇵🇱", name: "Polish", locale: "pl" };
    const en: ILangItem = { flag: "🇺🇸", name: "English", locale: "en" };
    const ru: ILangItem = { flag: "🇷🇺", name: "Russian", locale: "ru" };
    const ua: ILangItem = { flag: "🇺🇦", name: "Ukraine", locale: "ua" };

    let defaultLang = localStorage.getItem('current_lang') || ua.name;

    this.langs = [pl, en, ua, ru];
    this.translate.addLangs([defaultLang, en.name]);
    this.translate.defaultLang = defaultLang;
    this.use(defaultLang);
  }
}
