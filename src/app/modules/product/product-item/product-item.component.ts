import { Component, OnInit, Input } from "@angular/core";
// import { CartService } from '../../cart/cart.service';
import { environment } from "src/environments/environment";
import { CurrencyService } from "../../currency/currency.service";
import { CartService } from "../../cart/cart.service";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"],
})
export class ProductItemComponent implements OnInit {
  @Input() product: any = {};
  @Input() hoststatic = environment.hoststatic;

  constructor(public currency: CurrencyService, public cart: CartService) {}

  ngOnInit(): void {}

  save($event: Event, id: number) {
    $event.preventDefault();
    alert(`Product #${id} saved`);
  }

  toCart($event: Event, item: any) {
    $event.preventDefault();
    this.cart.isCartView = true;
    this.cart.addToCart(item);
  }

  Math = Math;
}
