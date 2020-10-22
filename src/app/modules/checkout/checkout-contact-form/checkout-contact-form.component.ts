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
export class CheckoutContactFormComponent implements OnInit, OnChanges {
    // public countries = ['countries.ukraine', 'countries.poland'];
    selectedCuntry: any;
    public countryName: any;
    @Output() formSubmit = new EventEmitter();
    currentLang;
    values: any;
    localLang: any;
    countries = [];
    selectCountry: any;
    selected: any;
    _model: ICheckoutContact;
    selectedCountry: any;

    @Output() modelChange = new EventEmitter();

    set model(val: ICheckoutContact) {
        this._model = val;
        this.modelChange.emit(this._model);
    }

    @Input() get model(): ICheckoutContact {
        //console.log(this._model);
        return this._model;
    }


    constructor(private translate: TranslateService,
                public checkContact: CheckoutContactFormService,
                public  langService: AppLangService,
                @Inject(DOCUMENT) private document: Document) {

    }


    ngOnInit(): void {

        this.localLang = localStorage.getItem('current_lang');
        // console.log('lang=========>', this.localLang);
        this.getCountry();
    }

    ngOnChanges(changes: SimpleChanges) {
    }

    getCountry(): void {
        this.checkContact.getCountry().subscribe(data => {
            if (this.localLang == 'ua') {
                this.currentLang = 2;
            } else if (this.localLang == 'en') {
                this.currentLang = 1;
            } else if (this.localLang == 'ru') {
                this.currentLang = 3;
            } else if (this.localLang == 'pl') {
                this.currentLang = 4;
            }

            this.countries = [];
            this.selectCountry = data.data;
            data.data.forEach(elem => {
                elem.descriptions.forEach(item => {
                    if (item.lang_id == this.currentLang) {
                        this.countries.push(item.name);
                        // console.log(this.countries);
                    }
                });
            });
            if (this._model.country == '') {
                this._model.country = this.countries[0];
            }

            // console.log(this.testVal)
            // this.values = this._model.country;
            // console.log(this.countries);

        });
    }


    onChange(event) {
        this._model.country = event.value;
        // console.log( event);
        // console.log(this.countryName);
    }

    onSubmit() {
        // console.log('sadsdasdas', this.countryName);
        this.formSubmit.emit(this.countryName);
    }

    setCountry(item): void {
        this._model.country = item;
        // this.selectedCuntry=item
        // console.log('change===>',this._model);
    }

    nextBtn(): void {
        this.selectCountry.forEach(elem => {
            this.selected = elem;
            elem.descriptions.forEach(item => {
                if (item.name == this._model.country) {
                    this.selectedCountry = this.selected;
                    this.checkContact.BSubject.next( this.selectedCountry)
                    // console.log( this.selectedCountry);
                }
            });
        });
    }


}
