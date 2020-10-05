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
  public isLigpayChecked: boolean = false;

  constructor(public cart: CartService, public check: CheckoutService) {}

  ngOnInit(): void {}

  nextStep() {
    this.check.steps[1].done = true;
  }

  edit() {
    this.check.steps[1].done = false;
    console.log(this.check.checkoutContact.country);
  }

  valid: boolean = true;
  onValid(valid: boolean) {
    this.valid = valid;
  }

  onItemChange(eventValue) {
    if (eventValue.cheked) {
      this.isLigpayChecked = true;
    }

    console.log(eventValue);

    // let liqPayData = {
    //   public_key: "sandbox_i23346177686",
    //   version: "3",
    //   action: "pay",
    //   amount: "",
    //   currency: "",
    //   description: "",
    //   order_id: ""
    // }
      //{{host}}hash_key
  }

}

