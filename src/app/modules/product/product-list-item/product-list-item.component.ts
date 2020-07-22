import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../cart/cart.service';
// import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() value: any = {};

  constructor(
    public cart: CartService
    ) { }

  ngOnInit(): void {
  }

  save($event: Event, id: number) {
    $event.preventDefault();
    alert(`Product #${id} saved`);
  }

  toCart($event: Event, item: any) {
    $event.preventDefault();
    // alert(`Product  #${id} added to cart`);
    this.cart.addToCart(item);
  }

}
