import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {CartService} from '../../cart/cart.service';
import {fadeHeight} from '../../ui/animations';
import {CheckoutService} from '../checkout.service';
import {TranslateService} from '@ngx-translate/core';
import {CheckoutContactFormService} from '../checkout-contact-form.service';
import {AppLangService} from '../../core/app-lang.service';
import { AuthService } from '../../core/auth/auth.service';

@Component({
    animations: [fadeHeight],
    selector: 'app-checkout-delivery-payment',
    templateUrl: './checkout-delivery-payment.component.html',
    styleUrls: ['./checkout-delivery-payment.component.scss'],
})
export class CheckoutDeliveryPaymentComponent implements OnInit, OnChanges{
    public isLigpayChecked: boolean = false;
    localLang: any;
    selectedCountry: any;
    arrDelivers = [];
    arrPayment = [];
    liqPayStatus:any;
    currentLang: any;
    itemDelivery = [];
    valid: boolean = true;

    constructor(
        public cart: CartService, 
        public check: CheckoutService,
        private translate: TranslateService,
        public checkContact: CheckoutContactFormService,
        public  langService: AppLangService,
        public authService: AuthService
    ) {}

    ngOnInit(): void {
        this.arrDelivers = [];
        this.arrPayment = [];

        //if (this.authService.getToken()) {
            this.getSelectCountry();
            this.getSelectCountryPay();
        //}

        this.getLiqpayStatus();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes){
            this.arrPayment = [];
            this.arrDelivers = [];
        }
    }

    nextStep() {
        this.check.steps[1].done = true;
    }

    edit() {
        this.check.steps[1].done = false;
    }

    onValid(valid: boolean) {
        this.valid = valid;
    }
    
    onItemChange(eventValue) {
        if (eventValue.cheked) {
            this.isLigpayChecked = true;
        }

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
        this.checkContact?.BSubject?.subscribe(data => {
            this.selectedCountry = data;

            if (this.selectedCountry && this.selectedCountry?.id) {
                this.checkContact?.getCountryDeliver(this.selectedCountry?.id, this.localLang).subscribe(data => {
                    this.arrDelivers = [] ;
                    data.data.deliveries.forEach(elem => {
                        this.arrDelivers.push(elem.delivery);
                    });
                });
            }
        });
    }

    getSelectCountryPay(): void {
        this.localLang = localStorage.getItem('current_lang');
        this.checkContact.BSubject.subscribe(data => {

            this.selectedCountry = data;
            if (this.selectedCountry && this.selectedCountry?.id) {
                this.checkContact.getCountryPayment(this.selectedCountry?.id, this.localLang).subscribe(data => {
                    this.arrPayment = [];
                    data.data.payments.forEach(elem => {
                        this.arrPayment.push(elem.payment);
                    });
                });
            }
        });
    }

    getLiqpayStatus(): void {
        this.checkContact.getLiqpayStatus().subscribe(data => {
            this.liqPayStatus = data.status;
        })
    }
}
