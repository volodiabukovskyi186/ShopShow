import {Component, OnInit} from '@angular/core';
import {ClientMenuService} from '../../client-menu/client-menu.service';
import {AppLangService} from '../../core/app-lang.service';
import {CurrencyService, ICurrency} from '../../currency/currency.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-top-panel',
    templateUrl: './top-panel.component.html',
    styleUrls: ['./top-panel.component.scss'],
})
export class TopPanelComponent implements OnInit {

    langStatus: boolean = false;
    currentlyStatus: boolean = false;
    public countryFlagsImgs;
    public currencyImgs;
    public langs;
    public flag;

    one: string;

    constructor(
        public clientMenu: ClientMenuService,
        public currency: CurrencyService,
        public appLang: AppLangService,
        public router: Router,
        public route: ActivatedRoute
    ) {
        this.getCurrency();
    }

    ngOnInit(): void {
        this.countryFlagsImgs = {
            English: '../../../../assets/icons/en.svg',
            Ukraine: '../../../../assets/icons/ua.svg',
            Polish: '../../../../assets/icons/pl.svg',
            Russian: '../../../../assets/icons/ru.svg',
        };

        this.currencyImgs = {
            UAH: '../../../../assets/icons/dollar.svg',
            USD: '../../../../assets/icons/hryvnia.svg'
        };



        // this.currency.current = localStorage.getItem('currency');

    }

    x(item) {
        console.log(item);
    }

    currencyStatus(): void {
        if (this.currentlyStatus == false) {
            this.currentlyStatus = true;
        } else {
            this.currentlyStatus = false;
        }
        console.log(this.currentlyStatus);
    }

    getCurrency() {
        this.currency.get().subscribe(this.getCurrencyHandler);
    }

    getCurrencyHandler = data => {
        this.currency.data = data.data;
        console.log('allLAng',this.currency.data)
        this.currency.setDefault();
        if(localStorage.getItem('currency')){
            const activeCurrency = localStorage.getItem('currency');
            this.currency.current= JSON.parse(activeCurrency)
        }
    };

    onClickCurrency(e: Event, c: ICurrency) {
        e.preventDefault();
        this.currency.current = c;
        console.log('currency=>',  this.currency.current);
        localStorage.setItem( "currency" ,JSON.stringify(this.currency.current))
    }

    changeLang(lang, item) {
        console.log(lang);
        console.log('item', item);

        this.langs = item;

        this.appLang.use(lang);
        window.location.reload();
    }
}
