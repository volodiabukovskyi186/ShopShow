import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductViewPageComponent } from './product-view-page/product-view-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  {
    path: ":id",
    component: ProductsPageComponent,
  },
  {
    path: "view/:id",
    component: ProductViewPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
