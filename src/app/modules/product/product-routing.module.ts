import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListViewComponent } from './product-list-view/product-list-view.component';
import { ProductViewPageComponent } from './product-view-page/product-view-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  {
    path: "list",
    component: ProductListViewComponent
  },
  {
    path: ":id",
    component: ProductsPageComponent,
  },
  {
    path: "view/:id",
    component: ProductViewPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
