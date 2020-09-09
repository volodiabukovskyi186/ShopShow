import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { RestorePageComponent } from './restore-page/restore-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {PersonalDataComponent} from './personal-data/personal-data.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';
import {MyReviewComponent} from './my-review/my-review.component';
import {WishlistComponent} from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: 'login',
    component: SigninPageComponent,
  },

  {
    path: 'register',
    component: SignupPageComponent,
  },
  {
    path: 'restore',
    component: RestorePageComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'personal-data'},
      {
        path: 'personal-data',
        component: PersonalDataComponent,
      },
      {
        path: 'my-orders',
        component: MyOrdersComponent,
      },
      {
        path: 'my-review',
        component: MyReviewComponent,
      },
      {
        path: 'wishList',
        component: WishlistComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccauntRoutingModule {}
