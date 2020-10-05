import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

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

  getUser() {
    return this.http.get<any>(environment.host + "getUserByToken");
  }
}
