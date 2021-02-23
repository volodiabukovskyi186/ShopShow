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

  deleteWishList(itemId: number): Observable<any> {
    //return this.http.delete(`${environment.wishlist}/${itemId}`, );
    return this.http.delete(`${environment.host}wishlist/${itemId}`, );
  }
  getUserWishlistByClientId(clientId, value?: string, cardNumber?: number): Observable<any> {
    const lang = localStorage.getItem('current_lang');
    let params = `clientWishlist/${clientId}?lang=${lang}`;

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
  getAllWhishList(clientId: any): Observable<any> {
    return this.http.get<any>(environment.host + `clientWishlist/${clientId}`);
  }
}
