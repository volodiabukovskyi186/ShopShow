import {Component, OnInit, Output, Input, EventEmitter, Inject, OnChanges, SimpleChanges} from '@angular/core';
import {ICheckoutContact} from '../checkout.service';
import {fadeHeight} from '../../ui/animations';
import {CheckoutContactFormService} from '../checkout-contact-form.service';
import {AppLangService} from '../../core/app-lang.service';
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';


@Component({
    animations: [fadeHeight],
    selector: 'app-checkout-contact-form',
    templateUrl: './checkout-contact-form.component.html',
    styleUrls: ['./checkout-contact-form.component.scss'],
})
export class CheckoutContactFormComponent implements OnInit ,OnChanges{
    // public countries = ['countries.ukraine', 'countries.poland'];
    currentLang: any;
    selectedCuntry:any;
    public countryName: any;

    @Output() formSubmit = new EventEmitter();

    countries: any;
     _model: ICheckoutContact;

    @Output() modelChange = new EventEmitter();

    set model(val: ICheckoutContact) {
        this._model = val;
        this.modelChange.emit(this._model);
    }

    @Input() get model(): ICheckoutContact {
        //console.log(this._model);
        return this._model;
    }

    // constructor( public checkContact: CheckoutContactFormService,
    //              public  langService: AppLangService ) {}

    constructor(private translate: TranslateService,
                public checkContact: CheckoutContactFormService,
                public  langService: AppLangService,
                @Inject(DOCUMENT) private document: Document) {
        translate.onLangChange.subscribe(lang => {

            if (lang.lang == 'en') {
                this.currentLang = 0;
            } else if (lang.lang == 'ua') {
                this.currentLang = 1;
            } else if (lang.lang == 'ru') {
                this.currentLang = 2;
            } else if (lang.lang == 'pl') {
                this.currentLang = 3;
            }
            console.log('currentLang++++++>',  this.currentLang);

        });
    }


    ngOnInit(): void {
        this.getCountry();

    }
    ngOnChanges(changes: SimpleChanges) {
            if(changes){
                console.log('change===>',this._model);

                // this.getCountry();
            }
    }

    getCountry(): void {

        this.checkContact.getCountry().subscribe(data => {
            this.countries = data.data;
            // console.log(this.countries);

        });
    }


    onChange(event) {
        this.countryName = event.value;
        console.log(event);
        // console.log(this.countryName);
    }

    onSubmit() {
        // console.log('sadsdasdas', this.countryName);
        this.formSubmit.emit(this.countryName);
    }
    setCountry(item): void {
        this._model.country = item.descriptions[this.currentLang]?.name;
        // this.selectedCuntry=item
        // console.log('change===>',this._model);
    }
}
