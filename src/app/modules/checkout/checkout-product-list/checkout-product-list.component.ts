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
  public userId: number;
  public orderId: any;
  public paymentDescription: string = 'Payment';
  public hashedDataToSend: any;
  public hashedPrivateData: any;
  public hashedData: any;
  public isOrderBtnCliked: boolean = false;
  private liqPayData: any;

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
      this.userId = res.data.user.id;
      console.log(this.userId);
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
      user_id: this.userId,
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
        manufacturer_id: p.product.manufactured_id
      });
    });

    this.check.post(this.orderResult).subscribe((res) => {
      //console.log(this.orderId.data.id);
      console.log(this.cart.total);
      console.log(this.currency.current.currency_title);

      this.orderHadler(res);
      this.orderId = res;

      if (this.orderId.checkoutPayment === 'LiqPay') {
        this.isOrderBtnCliked = true;

        this.liqPayData = {
          public_key: "sandbox_i23346177686",
          version: "3",
          action: "pay",
          amount: this.cart.total,
          currency: this.currency.current.currency_title,
          description: this.paymentDescription,
          order_id: this.orderId.data.id
        }

        console.log(this.liqPayData);

        this.check.getHashKey(this.liqPayData).subscribe((res) => {
          console.log(res);
          this.hashedData = res;

          this.hashedDataToSend = this.hashedData.result.data;
          this.hashedPrivateData = this.hashedData.result.sign;
        })
      }
      
      //{{host}}hash_key

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
