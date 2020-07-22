import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientPagePageComponent } from './client-page-page/client-page-page.component';
const routes: Routes = [
  {
    path: ":alias",
    component: ClientPagePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
