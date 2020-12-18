import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartViewComponent } from "./cart-view/cart-view.component";
import { CartButtonComponent } from "./cart-button/cart-button.component";
import { UiModule } from "../ui/ui.module";
import { CartFavoriteButtonComponent } from "./cart-favorite-button/cart-favorite-button.component";
import { ProductModule } from "../product/product.module";
import { ProductCartItemComponent } from "./product-cart-item/product-cart-item.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { CardWishlistItemComponent } from './card-wishlist-item/card-wishlist-item.component';
import {SalesModule} from '../sales/sales.module';

const C = [CartViewComponent, CartButtonComponent, CartFavoriteButtonComponent];

@NgModule({
  exports: [...C],
  declarations: [...C, ProductCartItemComponent, CardWishlistItemComponent],
  imports: [
    CommonModule,
    UiModule,
    ProductModule,
    SalesModule,
    FormsModule,
    RouterModule,
    TranslateModule,
  ],
})
export class CartModule {}
