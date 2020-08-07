import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
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
import { ClickOutsideModule } from "ng-click-outside";
import { GaleryProductFotoDialogComponent } from '../dialogs/galery-product-foto-dialog/galery-product-foto-dialog.component';
import { ProductListViewComponent } from './product-list-view/product-list-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { Ng5SliderModule } from 'ng5-slider';

const c = [
  ProductListComponent,
  ProductItemComponent,
  ProductSliderComponent,
  ProductListItemComponent,
  ImageViewComponent
];

@NgModule({
  declarations: [...c, ProductsPageComponent, ProductViewPageComponent, GaleryProductFotoDialogComponent, ProductListViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiModule,
    ProductRoutingModule,
    FormsModule,
    ReviewModule,
    TranslateModule,
    DragScrollModule,
    MatIconModule,
    ClickOutsideModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSliderModule,
    Ng5SliderModule,
  ],
  exports: [...c],
})
export class ProductModule {}
