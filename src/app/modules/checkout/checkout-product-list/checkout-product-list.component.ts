import { Component, OnInit, ViewChild } from "@angular/core";
import { CartService } from "../../cart/cart.service";
import { fadeHeight } from "../../ui/animations";
import { CheckoutService } from "../checkout.service";
import { CurrencyService } from "../../currency/currency.service";
import { AccauntService } from '../../../modules/accaunt/accaunt.service';
import { MyOrdersService } from '../../accaunt/my-orders/services/my-orders.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderSuccessDialogComponent } from '../../dialogs/order-success-dialog/order-success-dialog.component';
import { LiqpayDialogComponent } from '../../dialogs/liqpay-dialog/liqpay-dialog.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  animations: [fadeHeight],
  selector: "app-checkout-product-list",
  templateUrl: "./checkout-product-list.component.html",
  styleUrls: ["./checkout-product-list.component.scss"],
})
export class CheckoutProductListComponent implements OnInit {
  // @ViewChild('liqpayForm') form: NgForm;

  public userId: number;
  public orderData: any;
  public paymentDescription: string = 'Payment';
  public hashedDataToSend: any;
  public hashedPrivateData: any;
  public hashedData: any;
  public isOrderBtnCliked: boolean = false;
  public iframeName = 'nameFrame';
  public isPaymentBtnClicked: boolean = false;
  public formAction: SafeUrl = 'https://www.liqpay.ua/api/3/checkout';

  private liqPayData: any;

  constructor(
    public cart: CartService,
    public currency: CurrencyService,
    public check: CheckoutService,
    public accauntService: AccauntService,
    public myOrdersService: MyOrdersService,
    public dialog: MatDialog,
    public sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    if (localStorage.hasOwnProperty('token')) {
      this.getUserClientId();
    }
  }
  public getUserClientId(): void {
    this.accauntService.getUser().subscribe((res) => {
      this.userId = res.data.user.id;

    })
  }

  public confirmPayment(): void {
    this.isPaymentBtnClicked = true;
  }

  public getUrl(postUrl) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(postUrl);
  }

  order() {
    if( this.check.checkoutRecipient == "different" ) {
      this.orderResult = {
        products: [],
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
    }
    else {
      this.orderResult = {
        products: [],
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
        recipientLastName: this.check.checkoutContact.firstName,
        recipientFirstName: this.check.checkoutContact.lastName,
        recipientPhone: this.check.checkoutContact.phone,
        checkoutDelivery: this.check.checkoutDelivery,
        checkoutDeliveryAddress: this.check.checkoutDeliveryAddress,
        checkoutPayment: this.check.checkoutPayment,
      };
    }

    this.cart.list.forEach((p) => {
      this.orderResult?.products.push({
        product_id: p.product.id,
        quantity: p.count,
        manufactured_id: p.product?.manufactured_id
      });
    });

    this.check.post(this.orderResult).subscribe((res) => {

      if (res) {
        this.orderHadler(res);
        this.orderData = res;


        if (this.check.checkoutPayment !== 'liqpay') {
          this.openOrderModal(res.data[0].id);
          this.cart.list = [];
        }

        if (this.check.checkoutPayment === 'liqpay') {
          this.isOrderBtnCliked = true;

          this.check.getHashKey({
              public_key: "sandbox_i23346177686",
              version: "3",
              action: "pay",
              amount: this.cart?.total,
              currency: this.currency?.current?.currency_title,
              description: this.paymentDescription,
              order_id: this.orderData?.data.id
            }).subscribe((resp) => {
              if (resp) {


                this.hashedData = resp;
                this.hashedDataToSend = this.hashedData.result.data;
                this.hashedPrivateData = this.hashedData.result.sign;

                if (this.isOrderBtnCliked) {
                  this.openLiqpayModal();
                }

                //this.cart.list = [];
              }
          })
        }
        this.myOrdersService.myOrders.next(res);
      }
    });
  }

  public openLiqpayModal(event?: Event): void {
    const dialogRef = this.dialog.open(LiqpayDialogComponent, {
      data: {
          title: 'Select product to review',
          actions: [
            {
              param: 'closeIcon',
              label: 'Cancel',
            },
            {
              param: 'add',
              label: 'Add',
            },
          ],
          iframeName: this.iframeName,
          hashedData: this.hashedData,
          hashedDataToSend: this.hashedDataToSend,
          hashedPrivateData: this.hashedPrivateData,
          isOrderBtnCliked: this.isOrderBtnCliked
        },
      });
    dialogRef.afterClosed().subscribe(res => {});
  }

  public openOrderModal(orderId): void {
    const dialogRef = this.dialog.open(OrderSuccessDialogComponent, {
      data: {
          title: 'Select product to review',
          actions: [
            {
              param: 'closeIcon',
              label: 'Cancel',
            },
            {
              param: 'add',
              label: 'Add',
            },
          ],
          orderId: orderId
        },
      });
    dialogRef.afterClosed().subscribe(res => {});
  }

  orderHadler(data) {
    console.log(data);
    //alert("Замовлення відправлено\r\nОчікуйте дзвінка від менеджера ^_^");
    //this.cart.list = [];
  }

  orderResult: any;
}
