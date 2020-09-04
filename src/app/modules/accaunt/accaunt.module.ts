import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccauntButtonComponent } from "./accaunt-button/accaunt-button.component";
import { UiModule } from "../ui/ui.module";
import { SigninPageComponent } from "./signin-page/signin-page.component";
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { RestorePageComponent } from "./restore-page/restore-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { AccauntRoutingModule } from "./accaunt-routing.module";
import { CoreModule } from "../core/core.module";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { RestoreFormComponent } from "./restore-form/restore-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from '@angular/router';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyReviewComponent } from './my-review/my-review.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { WishlistComponent } from './wishlist/wishlist.component';

const components = [
  AccauntButtonComponent,
  LoginFormComponent,
  RegisterFormComponent,
  RestoreFormComponent,
];

@NgModule({
  declarations: [
    ...components,
    SigninPageComponent,
    SignupPageComponent,
    RestorePageComponent,
    ProfilePageComponent,
    PersonalDataComponent,
    MyOrdersComponent,
    MyReviewComponent,
    WishlistComponent,
  ],
  exports: [...components, PersonalDataComponent],
  imports: [
    CommonModule,
    CoreModule,
    UiModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    AccauntRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class AccauntModule {}
