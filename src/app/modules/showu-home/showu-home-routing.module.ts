import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowuHomePageComponent } from './showu-home-page/showu-home-page.component';
import {NotFoundComponent} from '../not-found/not-found/not-found.component';
import {AppComponent} from '../../app.component';

const routes: Routes = [
  {
    path: "",
    component: ShowuHomePageComponent
  },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowuHomeRoutingModule { }
