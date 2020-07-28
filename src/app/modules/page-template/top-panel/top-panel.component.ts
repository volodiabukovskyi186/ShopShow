import { Component, OnInit } from "@angular/core";
import { ClientMenuService } from "../../client-menu/client-menu.service";
import { AppLangService } from "../../core/app-lang.service";
import { CurrencyService, ICurrency } from '../../currency/currency.service';

@Component({
  selector: "app-top-panel",
  templateUrl: "./top-panel.component.html",
  styleUrls: ["./top-panel.component.scss"],
})
export class TopPanelComponent implements OnInit {

  langStatus:boolean=false;
  currentlyStatus:boolean=false;

  one:string
  constructor(
    public clientMenu: ClientMenuService,
    public currency: CurrencyService,
    public appLang: AppLangService,
  ) {
    this.getCurrency();
  }

  ngOnInit(): void {

  }
  currencyStatus():void{
    if(this.currentlyStatus==false){
      this.currentlyStatus=true
    }
    else{
      this.currentlyStatus=false;
    }
    console.log(this.currentlyStatus)
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



}
