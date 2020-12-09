import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManufacturesPageComponent } from "./manufactures-page/manufactures-page.component";
import { ManufacturerPageComponent } from './manufacturer-page/manufacturer-page.component';

const routes: Routes = [
  {
    path: '',
    component: ManufacturesPageComponent,
    data: {
      component: 'manufacturers',
    }
  },
  {
    path: ':id' ,

    component: ManufacturerPageComponent,
    data: {
      component : 'manufacturers' ,
    }
  },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManufacturersRoutingModule {}
