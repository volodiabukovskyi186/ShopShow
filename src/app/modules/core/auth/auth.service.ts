import { Injectable, EventEmitter, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  /**
   *
   */
  constructor(
    private _http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: string
  ) {}

  public auth: EventEmitter<any> = new EventEmitter<any>();

  public onAuth() {
    this.auth.emit();
  }

  public get permissions(): Array<string> {
    return ["read", "manage_roles"];
  }

  public get authenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem("token") != undefined;
    }
  }

  login(login: string, password: string): Observable<any> {
    let data = JSON.stringify({
      login,
      password,
    });
    return this._http.post(environment.signin, data);
  }

  signup(data: any) {
    data = JSON.stringify(data);
    return this._http.post(environment.signup, data);
  }
  restore(data: any) {
    data = JSON.stringify(data);
    return this._http.post(environment.signup, data);
  }

  public saveToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("token", token);
    }
  }

  public getToken(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem("token");
    }
    return null;
  }

  public logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem("token");
    }
  }
}
