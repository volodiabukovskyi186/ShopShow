import { Component, OnInit } from "@angular/core";
import { CheckoutService } from "../checkout.service";
import { fadeHeight } from "../../ui/animations";
import { CheckoutContactFormService } from "../checkout-contact-form.service";
import { AccauntService } from "../../accaunt/accaunt.service";
import { AuthService } from '../../core/auth/auth.service';

@Component({
  animations: [fadeHeight],
  selector: "app-checkout-contact",
  templateUrl: "./checkout-contact.component.html",
  styleUrls: ["./checkout-contact.component.scss"],
})
export class CheckoutContactComponent implements OnInit {
  countries: Array <any>;
  constructor(
    public check: CheckoutService,
    public auth: AuthService,
    public accaunt: AccauntService,
    public checkContact: CheckoutContactFormService
  ) {}

  ngOnInit(): void {
    this.copyContactFromCurrent();
    this.accaunt.currentChange.subscribe((_) => {     
      this.copyContactFromCurrent();
    });
    this.auth.auth.subscribe((_) => {     
      this.copyContactFromCurrent();
    });

  }

  copyContactFromCurrent() {
    if (this.auth.authenticated && this.accaunt.current) {
      this.check.checkoutContact.firstName = this.accaunt.current.user.first_name;
      this.check.checkoutContact.lastName = this.accaunt.current.user.last_name;
      this.check.checkoutContact.email = this.accaunt.current.user.email;
      this.check.checkoutContact.phone = this.accaunt.current.user.tel;
    } else {
      this.check.checkoutContact.firstName = "";
      this.check.checkoutContact.lastName = "";
      this.check.checkoutContact.email = "";
      this.check.checkoutContact.phone = "";
    }
  }


  nextStep() {
    this.check.steps[0].done = true;
    this.check.currentStepIndex = 1;

    console.log(this.check.checkoutContact);
  }

  edit() {
    this.check.steps[0].done = false;
    this.check.currentStepIndex = 0;

    console.log(this.check.checkoutContact);
  }
}
