import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { CartService } from "../cart.service";
import { fade, slideRight, fadeHeight, changeValueHighlight, changeValueScale } from "../../ui/animations";
import { CurrencyService } from '../../currency/currency.service';
import {ProductService} from '../../product/product.service';
import {AccauntService} from '../../accaunt/accaunt.service';
import {WishlistService} from '../../accaunt/wishlist/services/wishlist.service';
import {AuthService} from '../../core/auth/auth.service';

@Component({
  animations: [fade, slideRight, fadeHeight, changeValueHighlight, changeValueScale],
  selector: "app-cart-view",
  templateUrl: "./cart-view.component.html",
  styleUrls: ["./cart-view.component.scss"],
})
export class CartViewComponent implements OnInit, OnChanges {
  clientId: any;
  wishlistProducts: any;
  allwishlistData: any;
  try
  constructor(public currency: CurrencyService,
              public cart: CartService,
              public product: ProductService,
              public accaunt: AccauntService,
              public wishlistService: WishlistService,
              private  productService: ProductService,
              private authService: AuthService) {}

  ngOnInit(): void {
    if (localStorage.hasOwnProperty('token')) {
      this.getWishlist();
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes){
    }
  }

  ondelete($event) {
    this.cart.delete($event, this.cart.list);
  }

  getWishlist(): void {
    this.productService.whishlistSub.subscribe(() => {this.getWishlist(); });
    this.authService.logOutSub.subscribe(() => { this.allwishlistData = []; });
      this.accaunt.getUser().subscribe((res) => {
        this.clientId = res.data.user.id;
        if ( this.clientId ) {
          this.wishlistService.getUserWishlistByClientId(this.clientId).subscribe((res) => {
            this.wishlistProducts = res.data;
            this.allwishlistData = res.data;
            console.log('whish', this.allwishlistData);
            this.cart.favoritelenth.next(this.allwishlistData.length);
          });
        }
      });

  }
  deleteWhishList(whishId): void {
    this.wishlistService.deleteWishList(whishId).subscribe(() => {
    this.getWishlist();
    this.productService.whishlistSub.next();
    });
  }

}
