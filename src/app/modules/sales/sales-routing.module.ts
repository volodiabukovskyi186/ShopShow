import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SalesComponent} from './sales/sales.component';


const routes: Routes = [
  {
    path: "",
    component: SalesComponent,
    data: {
    component: 'sale'
    }
  },
  {
    path: ":id",
    component: SalesComponent,
    data:{
      component:'sale'
    }

  },
  { path: '**',  redirectTo: '/notfound' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
