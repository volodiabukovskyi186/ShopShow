import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SallersSliderComponent } from "./sallers-slider/sallers-slider.component";
import { UiModule } from "../ui/ui.module";
// import { DragScrollModule } from "ngx-drag-scroll";
import { RouterModule } from "@angular/router";
import { SallersRoutingModule } from "./sallers-routing.module";
import { PromotionViewPageComponent } from "./promotion-view-page/promotion-view-page.component";
import { ProductModule } from "../product/product.module";
import { PromotionPageComponent } from "./promotion-page/promotion-page.component";
import { CoreModule } from '../core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import {DragScrollModule} from "ngx-drag-scroll";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    SallersSliderComponent,
    PromotionPageComponent,
    PromotionViewPageComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    UiModule,
    RouterModule,
    TranslateModule,
    SallersRoutingModule,
    ProductModule,
    DragScrollModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [SallersSliderComponent],
})
export class SallersModule {}
