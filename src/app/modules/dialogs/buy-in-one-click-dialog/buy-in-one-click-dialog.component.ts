import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CheckoutService } from "../../../modules/checkout/checkout.service";
import { AccauntService } from '../../../modules/accaunt/accaunt.service';
import { CurrencyService } from '../../currency/currency.service';
import { CartService } from '../../cart/cart.service';
import { OrderSuccessDialogComponent } from '../../dialogs/order-success-dialog/order-success-dialog.component';
import { LiqpayDialogComponent } from '../../dialogs/liqpay-dialog/liqpay-dialog.component';
import { MyOrdersService } from '../../accaunt/my-orders/services/my-orders.service';

@Component({
  selector: 'app-buy-in-one-click-dialog',
  templateUrl: './buy-in-one-click-dialog.component.html',
  styleUrls: ['./buy-in-one-click-dialog.component.scss']
})
export class BuyInOneClickDialogComponent implements OnInit {
  public buyInOneClickForm: FormGroup;
  public isbuyInOneClickForm: boolean = true;
  public options;
  public orderResult;
  public userId: number;
  public orderData: any;
  public hashedDataToSend: any;
  public hashedPrivateData: any;
  public hashedData: any;
  public isOrderBtnCliked: boolean = false;
  public iframeName = 'nameFrame';
  public paymentDescription: string = 'Payment';
  public isBuyInOneClickForm: boolean = false;
  public userData: any;

  constructor(
    public dialogRef: MatDialogRef<BuyInOneClickDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public buyInOneClickProduct: any,
    public dialog: MatDialog,
    public check: CheckoutService,
    public accauntService: AccauntService,
    public currency: CurrencyService,
    public cart: CartService,
    public myOrdersService: MyOrdersService
  ) { }

  public ngOnInit(): void {
    this.generateBuyInOneClickForm();
    
    this.getUserClientId();

    console.log(this.buyInOneClickProduct);
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public generateBuyInOneClickForm(): void {
    this.buyInOneClickForm = new FormGroup({
      name: new FormControl('', []),
      phone: new FormControl('', [])
    });
  }

  public getUserClientId(): void {
    this.accauntService.getUser().subscribe((res) => {
      console.log(res);
      this.userData = res.data;
      this.userId = res.data.user.id;
    });
  }

  public onSubmit(): void {
    const data = this.buyInOneClickForm;

    console.log(data);

    this.options = [];

    if (this.userId) {
        this.orderResult = {
            products: [],
            sort_order: 1,
            costumer: '',
            currency_id: this.currency.current.id,
            user_id: this.userId,
            first_name: this.userData.user.first_name,
            last_name: this.userData.user.last_name,
            email: this.userData.user.email,
            city: this.userData.user.city,
            country: this.userData.user.country,
            telephone: this.userData.user.tel,
            status_id: 1,
            recipient: this.check.checkoutRecipient,
            recipientLastName: '',
            recipientFirstName: '',
            recipientPhone: '',
            checkoutDelivery: this.check.checkoutDelivery,
            checkoutDeliveryAddress: this.userData.user.delivery_adress,
            checkoutPayment: this.check.checkoutPayment,
            is_oneclick: 1
        };

        if (this.buyInOneClickForm.get('name').value.length > 0) {
          this.orderResult.first_name = this.buyInOneClickForm.get('name').value;
        }
        if (this.buyInOneClickForm.get('phone').value.length > 0) {
          this.orderResult.telephone = this.buyInOneClickForm.get('phone').value;
        }
    } else {
        this.orderResult = {
            products: [],
            sort_order: 1,
            costumer: '',
            currency_id: this.currency.current.id,
            user_id: this.userId,
            first_name: this.buyInOneClickForm.get('name').value,
            last_name: this.check.checkoutContact.lastName,
            email: this.check.checkoutContact.email,
            city: this.check.checkoutContact.city,
            country: this.check.checkoutContact.country,
            telephone: this.buyInOneClickForm.get('phone').value,
            status_id: 1,
            recipient: this.check.checkoutRecipient,
            recipientLastName: '',
            recipientFirstName: this.buyInOneClickForm.get('name').value,
            recipientPhone: this.buyInOneClickForm.get('phone').value,
            checkoutDelivery: '',
            checkoutDeliveryAddress: '',
            checkoutPayment: '',
            is_oneclick: 1
        };
    }

        if (this.buyInOneClickProduct?.productOptions) {
          this.buyInOneClickProduct?.productOptions.forEach(option => {
            this.options.push(option.id);
          });
        }
        this.orderResult?.products.push({
            product_id: this.buyInOneClickProduct?.productToBuy.id,
            quantity: this.buyInOneClickProduct?.quantity,
            manufactured_id: this.buyInOneClickProduct?.productToBuy?.manufactured_id,
            options: this.options
        });

    if (!this.orderResult.user_id) {
        this.orderResult.user_id = 1;
    }
    this.check.post(this.orderResult).subscribe((res) => {

        if (res) {
            // this.orderHadler(res);
            this.orderData = res;

            if (this.check.checkoutPayment !== 'liqpay') {
                // this.openOrderModal(res.data[0].id);
                this.isBuyInOneClickForm = true;
                this.cart.list = [];
            }

            if (this.check.checkoutPayment === 'liqpay') {
                this.isOrderBtnCliked = true;

                this.check.getHashKey({
                    public_key: 'sandbox_i23346177686',
                    version: '3',
                    action: 'pay',
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
                    }
                });
            }
            this.myOrdersService.myOrders.next(res);
        }
    });
    this.orderResult = '';
  
    //this.contactService.sendCallbackData(data);

    this.isbuyInOneClickForm = false;
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
    dialogRef.afterClosed().subscribe(res => {
    });
  }

  // public openOrderModal(orderId): void {
  //     const dialogRef = this.dialog.open(OrderSuccessDialogComponent, {
  //         data: {
  //             title: 'Select product to review',
  //             actions: [
  //                 {
  //                     param: 'closeIcon',
  //                     label: 'Cancel',
  //                 },
  //                 {
  //                     param: 'add',
  //                     label: 'Add',
  //                 },
  //             ],
  //             orderId: orderId
  //         },
  //     });
  //     dialogRef.afterClosed().subscribe(res => {
  //     });
  // }

}
