import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CurrencyService} from '../../currency/currency.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-card-wishlist-item',
  templateUrl: './card-wishlist-item.component.html',
  styleUrls: ['./card-wishlist-item.component.scss']
})
export class CardWishlistItemComponent implements OnInit {

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

  ngOnInit(): void {}

  onDelete() {
    this.delete.emit(this.value.id);
  }

}
