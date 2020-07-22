import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CollectionItemComponent } from "./collection-item/collection-item.component";
import { RouterModule } from "@angular/router";
import { СollectionRoutingModule } from "./collection-routing.module";
import { CollectionPageComponent } from "./collection-page/collection-page.component";
import { CollectionViewPageComponent } from "./collection-view-page/collection-view-page.component";
import { UiModule } from '../ui/ui.module';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    CollectionItemComponent,
    CollectionPageComponent,
    CollectionViewPageComponent,
  ],
  exports: [CollectionItemComponent],
  imports: [CommonModule, RouterModule, UiModule, СollectionRoutingModule, ProductModule],
})
export class CollectionModule {}
