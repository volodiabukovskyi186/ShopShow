import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./login-form/login-form.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { RestoreFormComponent } from "./restore-form/restore-form.component";

const c = [LoginFormComponent, RegisterFormComponent, RestoreFormComponent];

@NgModule({
  declarations: [...c],
  exports: [...c],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, RouterModule],
})
export class AuthModule {}
