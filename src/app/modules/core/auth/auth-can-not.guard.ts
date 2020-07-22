import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  Navigation,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { LanguageService } from "../language.service";

@Injectable({
  providedIn: "root",
})
export class AuthCanNotGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private lang: LanguageService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.authenticated) {
      // set lang
      this.lang.use(next.paramMap.get("lang"));
      this.router.navigate([this.lang.routeLang, ]);
      return false;
    }

    return true;
  }
}
