import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowuHomePageComponent } from './showu-home-page/showu-home-page.component';


const routes: Routes = [
  {
    path: "",
    component: ShowuHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowuHomeRoutingModule { }
