import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AppLangService } from '../../../core/app-lang.service';

@Injectable({
  providedIn: "root",
})
export class WishlistService {
  public takeNumber: number;

  constructor(
    private http: HttpClient,
    public appLangService: AppLangService
  ) {}

  getUserWishlistByClientId(clientId, value?: string, cardNumber?: number): Observable<any> {
    let params = `clientWishlist/${clientId}`;

    if (cardNumber) {
      this.takeNumber = cardNumber;
      params = `${params}?take=${this.takeNumber}`;
    }

    if (value === 'rating') {
      params = `${params}?sort_by=rating`;
    }

    if (value === 'minPrice') {
      params = `${params}?sort_by=price&desc=ASC`;
    }

    if (value === 'maxPrice') {
      params = `${params}?sort_by=price&desc=DESC`;
    }

    return this.http.get<any>(environment.host + params);
  }
}
