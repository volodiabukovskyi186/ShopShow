import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListViewComponent } from './product-list-view/product-list-view.component';
import { ProductViewPageComponent } from './product-view-page/product-view-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SalesComponent } from './sales/sales.component';
import {NotFoundComponent} from '../not-found/not-found/not-found.component';

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
  },
  {
    path: "",
    component: SalesComponent
  },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
