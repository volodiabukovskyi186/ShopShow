import { Component, OnInit } from "@angular/core";
import { ClientMenuService } from "../../client-menu/client-menu.service";
import { AppLangService } from "../../core/app-lang.service";
import { CurrencyService, ICurrency } from '../../currency/currency.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-top-panel",
    templateUrl: "./top-panel.component.html",
    styleUrls: ["./top-panel.component.scss"],
})
export class TopPanelComponent implements OnInit {

    langStatus: boolean = false;
    currentlyStatus: boolean = false;
    public countryFlagsImgs;
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
            en: '../../../../assets/icons/en.svg',
            ua: '../../../../assets/icons/ua.svg',
            pl: '../../../../assets/icons/pl.svg',
            ru: '../../../../assets/icons/ru.svg',
        }

        console.log(this.countryFlagsImgs);

    }

    x(item) {
        console.log(item);
    }

    currencyStatus(): void {
        if (this.currentlyStatus == false) {
            this.currentlyStatus = true
        } else {
            this.currentlyStatus = false;
        }
        console.log(this.currentlyStatus);
    }

    getCurrency() {
        this.currency.get().subscribe(this.getCurrencyHandler)
    }

    getCurrencyHandler = data => {
        this.currency.data = data.data;
        this.currency.setDefault();
    }

    onClickCurrency(e: Event, c: ICurrency) {
        e.preventDefault();
        this.currency.current = c;
    }

    changeLang(lang, item) {
        console.log(lang);
        console.log('item', item);

        this.langs = item;

        this.appLang.use(lang);
        window.location.reload();
    }
}
