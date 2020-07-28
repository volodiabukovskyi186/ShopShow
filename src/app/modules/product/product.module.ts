import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { RouterModule } from "@angular/router";
import { UiModule } from "../ui/ui.module";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductSliderComponent } from "./product-slider/product-slider.component";
import { DragScrollModule } from "ngx-drag-scroll";
import { ProductListItemComponent } from "./product-list-item/product-list-item.component";
import { ImageViewComponent } from "./@components/image-view/image-view.component";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { ProductViewPageComponent } from "./product-view-page/product-view-page.component";
import { ReviewModule } from "../review/review.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import {ClickOutsideModule} from "ng-click-outside";

const c = [
  ProductListComponent,
  ProductItemComponent,
  ProductSliderComponent,
  ProductListItemComponent,
  ImageViewComponent
];

@NgModule({
  declarations: [...c, ProductsPageComponent, ProductViewPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiModule,
    ProductRoutingModule,
    FormsModule,
    ReviewModule,
    TranslateModule,
    DragScrollModule
  ],
  exports: [...c],
})
export class ProductModule {}
