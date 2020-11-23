import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckoutProductListComponent } from "./checkout-product-list/checkout-product-list.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CheckoutProductItemComponent } from "./checkout-product-item/checkout-product-item.component";
import { CheckoutDeliveryPaymentComponent } from "./checkout-delivery-payment/checkout-delivery-payment.component";
import { CheckoutContactComponent } from "./checkout-contact/checkout-contact.component";
import { CheckoutStepComponent } from "./checkout-step/checkout-step.component";
import { UiModule } from "../ui/ui.module";
import { FormsModule } from "@angular/forms";
import { CheckoutContactFormComponent } from "./checkout-contact-form/checkout-contact-form.component";
import { CheckoutRecipientContactFormComponent } from "./checkout-recipient-contact-form/checkout-recipient-contact-form.component";
import { CheckoutRoutingModule } from "./checkout-routing.module";
import { CheckoutPageComponent } from "./checkout-page/checkout-page.component";
import { TranslateModule } from "@ngx-translate/core";
import { AccauntModule } from '../accaunt/accaunt.module';
import { MatSelectModule } from '@angular/material/select';
import { OrderSuccessDialogComponent } from '../dialogs/order-success-dialog/order-success-dialog.component';
import { LiqpayDialogComponent } from '../dialogs/liqpay-dialog/liqpay-dialog.component';

const COMP = [
  CheckoutProductListComponent,
  CheckoutComponent,
  CheckoutProductItemComponent,
  CheckoutDeliveryPaymentComponent,
  CheckoutContactComponent,
  CheckoutStepComponent,
  CheckoutContactFormComponent,
  CheckoutRecipientContactFormComponent,
  CheckoutPageComponent,
  OrderSuccessDialogComponent,
  LiqpayDialogComponent,
];

@NgModule({
  declarations: COMP,
  exports: COMP,
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    CheckoutRoutingModule,
    TranslateModule,
    AccauntModule,
    MatSelectModule
  ],
})
export class CheckoutModule {}
