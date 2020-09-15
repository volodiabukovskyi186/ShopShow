import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from '../../../currency/currency.service';
import { CartService } from '../../../cart/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-wishlist-product-item',
  templateUrl: './wishlist-product-item.component.html',
  styleUrls: ['./wishlist-product-item.component.scss']
})
export class WishlistProductItemComponent implements OnInit {
  @Input() product: any;
  @Input() hoststatic = environment.hoststatic;

  public Math = Math;

  constructor(
    public currency: CurrencyService, 
    public cart: CartService
  ) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  save($event: Event, id: number) {
    $event.preventDefault();
    alert(`Product #${id} saved`);
  }

  toCart($event: Event, item: any) {
      $event.preventDefault();
      this.cart.isCartView = true;
      this.cart.addToCart(item);
  }

  isIn24Created(date): boolean {
      const date1 = new Date(date);
      const timeStamp = Math.round(new Date().getTime() / 1000);
      const timeStampYesterday = timeStamp - (24 * 3600);
      const is24 = date1.getTime() >= new Date(timeStampYesterday * 1000).getTime();
      return is24;
  }

}
