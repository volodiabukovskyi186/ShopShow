import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AccauntService } from '../../accaunt/accaunt.service';
import { ProductService } from 'src/app/modules/product/product.service';
import { WishlistService } from '../../accaunt/wishlist/services/wishlist.service';
import { Subject } from 'rxjs';
import { CartService } from '../../cart/cart.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges {
    @Input() products: Array<any> = [];

    public isSalesPage: boolean = false;
    public clientId: number;
    public wishlistProducts = [];

    constructor(
        private title: Title, 
        private route: ActivatedRoute,
        public accauntService: AccauntService,
        public wishlistService: WishlistService,
        public productService: ProductService,
        public cart: CartService
    ) {}

    public ngOnInit(): void {
        console.log(this.products);

        this.updateMeta();
        //this.getWishlist();
    }

    public ngOnChanges(): void {
        //this.getWishlist();
    }

    // public getWishlist(): void {
    //     this.accauntService.getUser().subscribe((res) => {
    //         this.clientId = res.data.user.id;
    //         if (this.clientId) {
    //           this.wishlistService.getUserWishlistByClientId(this.clientId).subscribe((res) => {
    //             console.log(res);
    //             //this.allwishlistData = res.data;
    //             //this.productService.updatedWishlist$(this.wishlistProducts);
    //           });
    //         }
    //     });
    // }
    
    // ngOnInit(): void {

    //     // this.route.params.subscribe((data) => {
    //     //     console.log(data);
    //     //     if (data.id === "sales") {
    //     //         this.isSalesPage = true;
    //     //     }
    //     // });

    //     this.updateMeta();
    // }

    updateMeta() {
        const title = `Categories | ShowU`;
        this.title.setTitle(title);
    }
}
