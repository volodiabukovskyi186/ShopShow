/**
 * Usage: dateString | localDate:'format'
 **/

import { Pipe, PipeTransform } from "@angular/core";
import { formatDate } from "@angular/common";
import { AppLangService } from "./app-lang.service";

@Pipe({
  name: "localDate",
  pure: false
})
export class LocalDatePipe implements PipeTransform {
  constructor(private lang: AppLangService) {
    // this.lang.updated.subscribe();
  }

  transform(value: any, format: string = "longDate") {
    if (!value) return "";
    // let locale = this.lang.getLanguage(this.lang.current)?.locale;
    let locale = this.lang.current;
    // console.log('local==>',value)
    return locale ? formatDate(value, format, locale) : value;
  }
}
