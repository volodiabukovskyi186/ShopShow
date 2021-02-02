import {Component, OnInit, Input} from '@angular/core';
// import { CartService } from '../../cart/cart.service';
import {environment} from 'src/environments/environment';
import {CurrencyService} from '../../currency/currency.service';
import {CartService} from '../../cart/cart.service';
import { AccauntService } from '../../accaunt/accaunt.service';
import { ProductService } from 'src/app/modules/product/product.service';
import { WishlistService } from '../../accaunt/wishlist/services/wishlist.service';
import { Subject } from 'rxjs';
import { AuthService } from '../../core/auth/auth.service';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
    @Input() product: any = {};
    @Input() hoststatic = environment.hoststatic;
    //@Input() allWishlistProducts;

    Math = Math;
    userId: number;

    public clientId: number;
    public wishlistProducts;
    public whishlistSub: Subject<any> = new Subject<any>();

    constructor(
        public currency: CurrencyService, 
        public cart: CartService,
        public accauntService: AccauntService,
        public productService: ProductService,
        public wishlistService: WishlistService,
        public authService: AuthService
    ) {}

    ngOnInit(): void {
        //console.log(this.product);
        if (localStorage.hasOwnProperty('token')) {
            this.getUserAccauntData();
        }

        //this.wishlistProducts = this.allWishlistProducts;

        //console.log(this.wishlistProducts);

        //this.getWishlist();
    }

    ngOnChanges(): void {
        // this.wishlistProducts = this.allWishlistProducts;
        // this.productService.updatedWishlist$(this.wishlistProducts);
        //this.getWishlist();
        //console.log(this.wishlistProducts);
    }

    // save($event: Event, id: number) {
    //     $event.preventDefault();
    //     alert(`Product #${id} saved`);
    // }

    toCart($event: Event, item: any) {
        $event.preventDefault();
        this.cart.openCartView();
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

    public getWishlist(): void {
        this.accauntService.getUser().subscribe((res) => {
            this.clientId = res.data.user.id;
            if (this.clientId) {
              this.wishlistService.getUserWishlistByClientId(this.clientId).subscribe((res) => {
                this.wishlistProducts = res.data;
                //this.allwishlistData = res.data;
                console.log('whish', this.wishlistProducts);
                this.cart.updatedWishlist$(this.wishlistProducts);
              });
            }
        });
    }
    
    public addToWishlist(event: Event, product) {
        event.preventDefault();
        this.cart.closeCartView();
        this.cart.openFavoriteView();
        this.cart.addToFavourite(product);
    }
}
