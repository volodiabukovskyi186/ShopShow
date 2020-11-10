import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManufacturersSliderComponent } from "./manufacturers-slider/manufacturers-slider.component";
import { UiModule } from "../ui/ui.module";
import { RouterModule } from "@angular/router";
import { ManufacturesPageComponent } from "./manufactures-page/manufactures-page.component";
import { ManufacturerPageComponent } from "./manufacturer-page/manufacturer-page.component";
import { ManufacturersRoutingModule } from './manufacturers-routing.module';
import { ProductModule } from '../product/product.module';
import { DragScrollModule } from 'ngx-drag-scroll';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    ManufacturersSliderComponent,
    ManufacturesPageComponent,
    ManufacturerPageComponent,
  ],
  imports: [
    CommonModule, 
    ManufacturersRoutingModule, 
    RouterModule, 
    UiModule, 
    ProductModule,
    DragScrollModule,
    TranslateModule
  ],
  exports: [ManufacturersSliderComponent]
})
export class ManufacturersModule {}
