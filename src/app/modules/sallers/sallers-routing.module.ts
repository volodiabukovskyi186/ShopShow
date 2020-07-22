import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PromotionViewPageComponent } from './promotion-view-page/promotion-view-page.component';
import { PromotionPageComponent } from './promotion-page/promotion-page.component';

const routes: Routes = [
  {
    path: "",
    component: PromotionPageComponent,
  },
  {
    path: "view/:id",
    component: PromotionViewPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SallersRoutingModule {}
