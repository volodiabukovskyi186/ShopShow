import { Component, OnInit } from "@angular/core";
import { CartService } from "../../cart/cart.service";
import { fadeHeight } from "../../ui/animations";
import { CheckoutService } from "../checkout.service";
import { CurrencyService } from "../../currency/currency.service";
import { AccauntService } from '../../../modules/accaunt/accaunt.service';
import { MyOrdersService } from '../../accaunt/my-orders/services/my-orders.service';

@Component({
  animations: [fadeHeight],
  selector: "app-checkout-product-list",
  templateUrl: "./checkout-product-list.component.html",
  styleUrls: ["./checkout-product-list.component.scss"],
})
export class CheckoutProductListComponent implements OnInit {
  public clientId: number;

  constructor(
    public cart: CartService,
    public currency: CurrencyService,
    public check: CheckoutService,
    public accauntService: AccauntService,
    public myOrdersService: MyOrdersService
  ) {}

  ngOnInit(): void {}
  
  public getUserClientId(): void {
    this.accauntService.getUser().subscribe((res) => {
      this.clientId = res.data.user.id;
      console.log(this.clientId);
    })
  }

  order() {
    this.getUserClientId();

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
      client_id: this.clientId,
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

    this.check.post(this.orderResult).subscribe((res) => {
      this.orderHadler(res);
      console.log(res);
      this.myOrdersService.myOrders.next(res);
      console.log(this.myOrdersService.myOrders.next(res));
      
      //console.log(this.myOrdersService.myOrders.value);
    });

  }

  orderHadler(data) {
    console.log(data);
    alert("Замовлення відправлено\r\nОчікуйте дзвінка від менеджера ^_^");
    this.cart.list = [];
  }

  orderResult: any;
}
