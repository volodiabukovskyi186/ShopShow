import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { CartService } from "../cart.service";
import { changeValueHighlight } from "../../ui/animations";
import { CurrencyService } from "../../currency/currency.service";

@Component({
  animations: [changeValueHighlight],
  selector: "app-product-cart-item",
  templateUrl: "./product-cart-item.component.html",
  styleUrls: ["./product-cart-item.component.scss"],
})
export class ProductCartItemComponent implements OnInit,OnChanges {
  host: string = "https://api.showu.com.ua/";
  @Output() delete = new EventEmitter<any>();
  private _value: any;
  @Output() valueChange = new EventEmitter();

  set value(val: any) {
    this._value = val;
    this.valueChange.emit(this._value);
  }

  @Input() get value(): any {
    return this._value;
  }

  constructor(public currency: CurrencyService, public cart: CartService) {}

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges) {

  }

  onDelete() {
    this.delete.emit(this.value);
  }
}
