import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import { changeValueScale } from "../../ui/animations";
import {CurrencyService} from '../../currency/currency.service';
import {ProductService} from '../../product/product.service';
import {AccauntService} from '../../accaunt/accaunt.service';
import {WishlistService} from '../../accaunt/wishlist/services/wishlist.service';
@Component({
  animations: [changeValueScale],
  selector: 'app-cart-favorite-button',
  templateUrl: './cart-favorite-button.component.html',
  styleUrls: ['./cart-favorite-button.component.scss']
})
export class CartFavoriteButtonComponent implements OnInit {
  clientId:any;
  sreenwidth:boolean;
  allwishlistData:any;
  constructor(public currency: CurrencyService,
              public cart: CartService,
              public product: ProductService,
              public accaunt: AccauntService,
              public wishlistService: WishlistService)
  {}
  ngOnInit(): void {

    this.getWishlist()
  }

  onResize(event) {
    if (event.currentTarget.innerWidth >= 768) {
      this.sreenwidth = false;
    } else {
      this.sreenwidth = true;
    }
  }
  getWishlist(): void{
    this.accaunt.getUser().subscribe((res) => {
      this.clientId = res.data.user.id;

      this.wishlistService.getUserWishlistByClientId(this.clientId).subscribe((res) => {
        this.allwishlistData = res.data;

        // this.cart.favoritelenth.next(this.allwishlistData.length);
      })

    });
  }



}
