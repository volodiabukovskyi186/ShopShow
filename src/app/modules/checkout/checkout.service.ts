import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

export interface IContact {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface ICheckoutContact extends IContact {
  country: string;
  city: string;
  email: string;
}

export interface IStepState {
  done: boolean;
}

@Injectable({
  providedIn: "root",
})
export class CheckoutService {
  steps: Array<IStepState> = [{ done: true }, { done: false }];

  currentStepIndex: number = 0;

  checkoutContact: ICheckoutContact = {
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    phone: "",
    email: "",
  };

  checkoutPayment:
    | "cash"
    | "visamastercard"
    | "liqpay"
    | "paypal"
    | "przelewy24pl" = "cash";

  checkoutDelivery: string = "delivery";

  checkoutDeliveryAddress: string = "";

  checkoutRecipient: "me" | "different" = "me";
  checkoutRecipientContact: IContact = {
    firstName: "FirstName",
    lastName: "LastName",
    phone: "+3801122333",
  };

  constructor(private http: HttpClient) {}

  post(data): Observable<any> {
    return this.http.post(environment.host + `order`, data)
      .pipe(
        //retry(1),
        catchError(this.handleError)
      );
  }

  getHashKey(data) {
    return this.http.post(`${environment.host}hash_key`, data);
  }

  handleError(error) {
    let errorMessage = 'Error!';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);

    return throwError(errorMessage);
  }
}
