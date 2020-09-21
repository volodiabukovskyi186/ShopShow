import {Component, OnInit, Input} from '@angular/core';
// import { CartService } from '../../cart/cart.service';
import {environment} from 'src/environments/environment';
import {CurrencyService} from '../../currency/currency.service';
import {CartService} from '../../cart/cart.service';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
    @Input() product: any = {};
    @Input() hoststatic = environment.hoststatic;
    Math = Math;

    constructor(public currency: CurrencyService, public cart: CartService) {
    }

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
