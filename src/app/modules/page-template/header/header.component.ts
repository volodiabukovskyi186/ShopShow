import { Component, OnInit } from "@angular/core";
import { AppLangService } from '../../core/app-lang.service';
import { AuthService } from '../../core/auth/auth.service';
import { AccauntService } from '../../accaunt/accaunt.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    public cart: CartService,
    public auth: AuthService,
    public appLang: AppLangService,
    public accaunt: AccauntService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.auth.auth.subscribe((_) => {
      this.getUser();
    });
  }

  getUser() {
    if (this.auth.authenticated)
      this.accaunt.getUser().subscribe((data) => {
        this.accaunt.current = data.data;
        this.accaunt.onCurrent();
      });
  }
}
