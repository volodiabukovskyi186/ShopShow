import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from '../../../currency/currency.service';
import { CartService } from '../../../cart/cart.service';
import { environment } from 'src/environments/environment';
import { AccauntService } from '../../../accaunt/accaunt.service';
import { ProductService } from 'src/app/modules/product/product.service';

@Component({
  selector: 'app-wishlist-product-item',
  templateUrl: './wishlist-product-item.component.html',
  styleUrls: ['./wishlist-product-item.component.scss']
})
export class WishlistProductItemComponent implements OnInit {
  @Input() product: any;
  @Input() hoststatic = environment.hoststatic;
  @Input() wishlistProducts;

  public Math = Math;
  public userId: number;
  public newWishlistProduct: any;

  constructor(
    public currency: CurrencyService, 
    public cart: CartService,
    public accauntService: AccauntService,
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    console.log(this.product);
  }

  // save($event: Event, id: number) {
  //   $event.preventDefault();
  //   alert(`Product #${id} saved`);
  // }

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

  public getUserAccauntData(): void {
    this.accauntService.getUser().subscribe((data) => {
        console.log(data);
        this.userId = data.data.user.id;
        this.accauntService.current = data.data;
        this.accauntService.onCurrent();
    });
  }

  public addToWishlist(product) {
    //$event.preventDefault();
    const found = this.wishlistProducts.some((el) => { el.product_id === product.product_id});
    if (found) {
      this.productService.addProductToWishlist({
        product_id: product?.description?.product_id,
        user_id: this.userId
      }).subscribe((res) => {
        console.log(res);
        alert(`Product #${res.data.product_id} was added to wishlist!`);
      })
    } else {
      alert(`Product already exsist in wishlist!`);
    }
  }

}
