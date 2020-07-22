import { Injectable } from "@angular/core";
import { Contact, ContactUs } from "./contact";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  contacts: Contact;
  contactUs: ContactUs = { email: "", message: "", name: "", subject: "" };

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get<any>(environment.data + `/contact.json`);
  }
}
