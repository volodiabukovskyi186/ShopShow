import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface IPermission {
  name: string;
  state: number;
}
export interface IRole {
  created_at: string;
  id: number;
  name: string;
  permissions: IPermission[];
  updated_at: string;
}
export interface IUser {
  created_at: string;
  email: string;
  first_name: string;
  id: number;
  is_confirm_email: number;
  is_confirm_tel: number;
  last_name: string;
  permissions: IPermission[];
  role_id: number;
  tel: string;
  updated_at: string;
  city?: string;
  country?: string;
  delivery_adress?: string;
  album_id?: number;
}

export interface IAccaunt {
  role: IRole;
  user: IUser;
}

@Injectable({
  providedIn: "root",
})
export class AccauntService {
  currentChange: EventEmitter<any> = new EventEmitter<any>();
  constructor(private http: HttpClient) {}

  onCurrent() {
    this.currentChange.emit();
  }

  current: IAccaunt;

  getUser(): Observable<any> {
    return this.http.get<any>(environment.host + "getUserByToken");
    //.pipe(catchError(this.errorHandler))
  }

  // errorHandler(error: HttpErrorResponse) {
  //   console.log('Error ========= >>>', error);
  //   return Observable.throw(error.message || "server error.");
  // }
}
