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

const C = [CartViewComponent, CartButtonComponent, CartFavoriteButtonComponent];

@NgModule({
  exports: [...C],
  declarations: [...C, ProductCartItemComponent],
  imports: [
    CommonModule,
    UiModule,
    ProductModule,
    FormsModule,
    RouterModule,
    TranslateModule,
  ],
})
export class CartModule {}
