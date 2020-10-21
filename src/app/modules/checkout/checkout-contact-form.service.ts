import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuestionBase, TextboxQuestion, CheckboxGroupQuestion } from '../ui/dynamic-form';
import { ICheckoutContact } from './checkout.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutContactFormService {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(private http: HttpClient) {}

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



}
