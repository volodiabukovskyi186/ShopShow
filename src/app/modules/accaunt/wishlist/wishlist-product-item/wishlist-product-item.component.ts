import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from '../../../currency/currency.service';
import { CartService } from '../../../cart/cart.service';
import { environment } from 'src/environments/environment';
import { AccauntService } from '../../../accaunt/accaunt.service';
import { ProductService } from 'src/app/modules/product/product.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist-product-item',
  templateUrl: './wishlist-product-item.component.html',
  styleUrls: ['./wishlist-product-item.component.scss']
})
export class WishlistProductItemComponent implements OnInit {
  @Input() product: any;
  @Input() hoststatic = environment.hoststatic;
  @Input() wishlistProducts;

  @Output() updatedWishlistProducts: EventEmitter<boolean> = new EventEmitter<boolean>();

  public Math = Math;
  public userId: number;
  public newWishlistProduct: any;

  constructor(
    public currency: CurrencyService, 
    public cart: CartService,
    public accauntService: AccauntService,
    public productService: ProductService,
    public wishlistService: WishlistService
  ) { }

  ngOnInit(): void {

    //console.log(window.onload);
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

        alert(`Product #${res.data.product_id} was added to wishlist!`);
      })
    } else {
      alert(`Product already exsist in wishlist!`);
    }
  }

  // @Output() valid: EventEmitter<boolean> = new EventEmitter<boolean>();

  public deleteItemFromWishlist(wishlistProductId: number): void {
    console.log(wishlistProductId);
    this.wishlistService.deleteWishList(wishlistProductId).subscribe((res) => {
      console.log(res);
    })

    this.wishlistProducts = this.wishlistProducts.filter((wishlistProduct) => {
      return wishlistProduct.id !== wishlistProductId;
    })

    this.updatedWishlistProducts.emit(this.wishlistProducts)
  }

}
