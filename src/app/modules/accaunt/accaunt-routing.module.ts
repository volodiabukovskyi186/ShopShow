import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { RestorePageComponent } from './restore-page/restore-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {
    path: "login",
    component: SigninPageComponent,
  },
  {
    path: "register",
    component: SignupPageComponent,
  },
  {
    path: "restore",
    component: RestorePageComponent,
  },
  {
    path: "profile",
    component: ProfilePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccauntRoutingModule {}
