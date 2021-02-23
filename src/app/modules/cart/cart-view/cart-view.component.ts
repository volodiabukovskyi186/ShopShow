import {Component, OnInit, OnChanges, SimpleChanges, Inject, PLATFORM_ID} from '@angular/core';
import { CartService } from "../cart.service";
import { fade, slideRight, fadeHeight, changeValueHighlight, changeValueScale } from "../../ui/animations";
import { CurrencyService } from '../../currency/currency.service';
import {ProductService} from '../../product/product.service';
import {AccauntService} from '../../accaunt/accaunt.service';
import {WishlistService} from '../../accaunt/wishlist/services/wishlist.service';
import {AuthService} from '../../core/auth/auth.service';
import { isPlatformBrowser } from "@angular/common";

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
  try;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    public currency: CurrencyService,
    public cart: CartService,
    public product: ProductService,
    public accaunt: AccauntService,
    public wishlistService: WishlistService,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.hasOwnProperty('token')) {
        //this.getWishlist();
        //this.authService.logOutSub.subscribe(() => { this.getUserId(); });
        this.cart.getUserId();
      }
    }
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.cart.getUserId();
    }
  }

  ondelete($event) {
    this.cart.delete($event, this.cart.list);
  }

  getWishlist(): void {
    // this.productService.whishlistSub.subscribe(() => {this.getWishlist(); });
    //this.authService.logOutSub.subscribe(() => {  });

    this.cart.getWishlist$().subscribe((res) => {
      console.log(res);
      this.cart.favorite = res;
      //console.log('whish', this.allwishlistData);
    })
      // this.accaunt.getUser().subscribe((res) => {
      //   this.clientId = res.data.user.id;
      //   if ( this.clientId ) {
      //     this.wishlistService.getUserWishlistByClientId(this.clientId).subscribe((res) => {
      //       this.wishlistProducts = res.data;
      //       this.allwishlistData = res.data;
      //       console.log('whish', this.allwishlistData);
      //       this.cart.favoritelenth.next(this.allwishlistData.length);
      //     });
      //   }
      // });

  }

  public deleteFromWhishList($event): void {
    this.cart.deleteFromFavorites($event, this.cart.favorite);
  }

  // public deleteWhishList(wishlistItem): void {
  //   this.wishlistService.deleteWishList(wishlistItem.id).subscribe((res) => {
  //     console.log(res);
  //   });

  //   this.allwishlistData = this.allwishlistData.filter((resp) => { return resp.id !== wishlistItem.id });
  // }

}
