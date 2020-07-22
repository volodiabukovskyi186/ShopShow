import { Component, OnInit } from "@angular/core";
import { CartService } from "../../cart/cart.service";
import { fadeHeight } from "../../ui/animations";
import { CheckoutService } from "../checkout.service";
import { CurrencyService } from "../../currency/currency.service";

@Component({
  animations: [fadeHeight],
  selector: "app-checkout-product-list",
  templateUrl: "./checkout-product-list.component.html",
  styleUrls: ["./checkout-product-list.component.scss"],
})
export class CheckoutProductListComponent implements OnInit {
  constructor(
    public cart: CartService,
    public currency: CurrencyService,
    public check: CheckoutService
  ) {}

  ngOnInit(): void {}

  order() {
    this.orderResult = {
      products: [],
      // checkoutContact: this.check.checkoutContact,
      // checkoutDelivery: this.check.checkoutDelivery,
      // checkoutDeliveryAddress: this.check.checkoutDeliveryAddress,
      // checkoutPayment: this.check.checkoutPayment,
      // checkoutRecipient: this.check.checkoutRecipient,
      // checkoutRecipientContact: this.check.checkoutRecipientContact,

      sort_order: 1,
      costumer: "",
      currency_id: this.currency.current.id,
      first_name: this.check.checkoutContact.firstName,
      last_name: this.check.checkoutContact.lastName,
      email: this.check.checkoutContact.email,
      city: this.check.checkoutContact.city,
      country: this.check.checkoutContact.country,
      telephone: this.check.checkoutContact.phone,
      status_id: 1,
      recipient: this.check.checkoutRecipient,
      recipientLastName: this.check.checkoutRecipientContact.lastName,
      recipientFirstName: this.check.checkoutRecipientContact.firstName,
      recipientPhone: this.check.checkoutRecipientContact.phone,
      checkoutDelivery: this.check.checkoutDelivery,
      checkoutDeliveryAddress: this.check.checkoutDeliveryAddress,
      checkoutPayment: this.check.checkoutPayment,
    };

    this.cart.list.forEach((p) => {
      this.orderResult.products.push({
        product_id: p.product.id,
        quantity: p.count,
      });
    });

    this.check.post(this.orderResult).subscribe(this.orderHadler);

  }

  orderHadler = data => {
    console.log(data);
    alert("Замовлення відправлено\r\nОчікуйте дзвінка від менеджера ^_^");
    this.cart.list = [];
  }

  orderResult: any;
}
