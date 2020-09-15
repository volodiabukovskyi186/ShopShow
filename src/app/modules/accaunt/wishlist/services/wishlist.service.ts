import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class WishlistService {

  constructor(private http: HttpClient) {}

  getUserWishlistByClientId(clientId): Observable<any> {
    return this.http.get<any>(environment.host + `clientWishlist/${clientId}`);
  }
}
