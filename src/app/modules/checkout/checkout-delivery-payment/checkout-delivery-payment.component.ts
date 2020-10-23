import {Component, OnInit} from '@angular/core';
import {CartService} from '../../cart/cart.service';
import {fadeHeight} from '../../ui/animations';
import {CheckoutService} from '../checkout.service';
import {TranslateService} from '@ngx-translate/core';
import {CheckoutContactFormService} from '../checkout-contact-form.service';
import {AppLangService} from '../../core/app-lang.service';

@Component({
    animations: [fadeHeight],
    selector: 'app-checkout-delivery-payment',
    templateUrl: './checkout-delivery-payment.component.html',
    styleUrls: ['./checkout-delivery-payment.component.scss'],
})
export class CheckoutDeliveryPaymentComponent implements OnInit {
    public isLigpayChecked: boolean = false;
    localLang: any;
    selectedCountry: any;

    arrDelivers = [];
    arrPayment=[];
    currentLang: any;
    itemDelivery = [];

    constructor(public cart: CartService, public check: CheckoutService,
                private translate: TranslateService,
                public checkContact: CheckoutContactFormService,
                public  langService: AppLangService,) {
    }

    ngOnInit(): void {

        this.getSelectCountry();
        this.getSelectCountryPay();
    }

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

    getDelivers(): void {
        this.checkContact.getDelivers().subscribe(data => {

        });
    }


    getSelectCountry(): void {


        this.localLang = localStorage.getItem('current_lang');
        this.checkContact.BSubject.subscribe(data => {
            this.arrDelivers=[];
            this.selectedCountry = data;
            this.checkContact.getCountryDeliver(this.selectedCountry.id, this.localLang).subscribe(data => {
                data.data.deliveries.forEach(elem => {
                    this.arrDelivers.push(elem.delivery);
                });
                console.log(this.arrDelivers);
            });
        });

    }
    getSelectCountryPay(): void {
        this.localLang = localStorage.getItem('current_lang');
        this.checkContact.BSubject.subscribe(data => {
            this.arrPayment=[];
            this.selectedCountry = data;
            this.checkContact.getCountryPayment(this.selectedCountry.id, this.localLang).subscribe(data => {
                data.data.payments.forEach(elem => {
                    this.arrPayment.push(elem.payment);
                });
                console.log(this.arrPayment);
            });
        });
    }


}

