import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { QuestionBase, TextboxQuestion, CheckboxGroupQuestion } from '../ui/dynamic-form';
import { ICheckoutContact } from './checkout.service';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {AppLangService} from '../core/app-lang.service';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CheckoutContactFormService {
  currentLang;
  countries:any;

  questions$: Observable<QuestionBase<any>[]>;
  lang:any;
  BSubject=new BehaviorSubject({lang: this.lang});

  constructor(private http: HttpClient){
    this.getCountry();
  }

  getQuestions(checkContact: ICheckoutContact): Observable<QuestionBase<string>[]> {
    let questions: QuestionBase<string>[] = [];
    
      questions = [
        new TextboxQuestion({
          key: "firstName",
          label: "First name",
          value: checkContact.firstName,
          required: true,
          order: 1
        }),
        new TextboxQuestion({
          key: "lastName",
          label: "Last name",
          value: checkContact.lastName,
          required: true,
          order: 1
        })
      ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

  getCountry(): Observable<any> {
    return this.http.get(`https://api.showu.com.ua/countrys`);
  }

  getCountryDeliver(id: number,lang:any): Observable<any> {
    console.log(lang)
    return this.http.get(`https://api.showu.com.ua/getDeliveriesCountry/${id}?lang=${lang}`);
  }
  getCountryPayment(id: number,lang:any): Observable<any> {
    console.log(lang)
    return this.http.get(`https://api.showu.com.ua/getPaymentsCountry/${id}?lang=${lang}`);
  }
  getDelivers(): Observable<any> {
    return this.http.get(`https://api.showu.com.ua/deliverys`);
  }
  getLiqpayStatus(): Observable<any> {
    return this.http.get(`https://api.showu.com.ua/liqpay/status`);
  }



}
