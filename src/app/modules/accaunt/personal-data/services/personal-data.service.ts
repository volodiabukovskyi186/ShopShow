import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PersonalDataService {

  constructor(private http: HttpClient) {}

  getUserWishlistByClientId(clientId, data) {
    return this.http.put<any>(environment.host + `client/${clientId}`, data);
  }
}
