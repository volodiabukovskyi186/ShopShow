import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { CollectionViewPageComponent } from './collection-view-page/collection-view-page.component';

const routes: Routes = [
  {
    path: "",
    component: CollectionPageComponent,
  },
  {
    path: "view/:id",
    component: CollectionViewPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class СollectionRoutingModule {}
