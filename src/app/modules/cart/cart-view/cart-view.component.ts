import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { fade, slideRight, fadeHeight, changeValueHighlight, changeValueScale } from "../../ui/animations";
import { CurrencyService } from '../../currency/currency.service';

@Component({
  animations: [fade, slideRight, fadeHeight, changeValueHighlight, changeValueScale],
  selector: "app-cart-view",
  templateUrl: "./cart-view.component.html",
  styleUrls: ["./cart-view.component.scss"],
})
export class CartViewComponent implements OnInit {
  constructor(public currency: CurrencyService, public cart: CartService) {}

  ngOnInit(): void {}

  ondelete($event) {
    this.cart.delete($event, this.cart.list);
  }
}
