import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageTemplateComponent } from "./page-template/page-template.component";
import {NotFoundComponent} from '../not-found/not-found/not-found.component';


export const pageRoutes: Routes = [

  {
    pathMatch:'full',
    path: "notfound",
    component: NotFoundComponent,
  },
  {
    path: "collections",
    component: PageTemplateComponent,
    loadChildren: () =>
      import("src/app/modules/collection/collection.module").then(
        (m) => m.CollectionModule
      ),
  },
  {
    path: "accaunt",
    component: PageTemplateComponent,
    loadChildren: () =>
      import("src/app/modules/accaunt/accaunt.module").then(
        (m) => m.AccauntModule
      ),
  },
  {
    path: "checkout",
    component: PageTemplateComponent,
    loadChildren: () =>
      import("src/app/modules/checkout/checkout.module").then(
        (m) => m.CheckoutModule
      ),
  },
  {
    path: "products",
    component: PageTemplateComponent,
    loadChildren: () =>
      import("src/app/modules/product/product.module").then(
        (m) => m.ProductModule
      ),
  },
  {
    path: "page",
    component: PageTemplateComponent,
    loadChildren: () =>
      import("src/app/modules/client-page/client-page.module").then(
        (m) => m.ClientPageModule
      ),
  },
  {
    path: "manufacturers",
    component: PageTemplateComponent,
    loadChildren: () =>
      import("src/app/modules/manufacturers/manufacturers.module").then(
        (m) => m.ManufacturersModule
      ),
  },
  {
    path: "promotions",
    component: PageTemplateComponent,
    loadChildren: () =>
      import("src/app/modules/sallers/sallers.module").then(
        (m) => m.SallersModule
      ),
  },
  {
    path: "sales",
    component: PageTemplateComponent,
    loadChildren: () =>
      import("src/app/modules/product/product.module").then(
        (m) => m.ProductModule
      ),
  },
  {
    path: "contacts",
    component: PageTemplateComponent,
    loadChildren: () =>
      import("src/app/modules/contact/contact.module").then(
        (m) => m.ContactModule
      ),
  },

  {
    path: "",
    component: PageTemplateComponent,
    loadChildren: () =>
      import("src/app/modules/showu-home/showu-home.module").then(
        (m) => m.ShowuHomeModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forChild(pageRoutes)],
  exports: [RouterModule],
})
export class PageTemplateRoutingModule {}
