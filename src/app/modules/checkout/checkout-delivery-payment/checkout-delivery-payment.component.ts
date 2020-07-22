import { Component, OnInit } from "@angular/core";
import { CartService } from "../../cart/cart.service";
import { fadeHeight } from "../../ui/animations";
import { CheckoutService } from "../checkout.service";

@Component({
  animations: [fadeHeight],
  selector: "app-checkout-delivery-payment",
  templateUrl: "./checkout-delivery-payment.component.html",
  styleUrls: ["./checkout-delivery-payment.component.scss"],
})
export class CheckoutDeliveryPaymentComponent implements OnInit {
  constructor(public cart: CartService, public check: CheckoutService) {}

  ngOnInit(): void {}
  nextStep() {
    this.check.steps[1].done = true;
  }

  edit() {
    this.check.steps[1].done = false;
  }

  valid: boolean = true;
  onValid(valid: boolean) {
    this.valid = valid;
  }

}

