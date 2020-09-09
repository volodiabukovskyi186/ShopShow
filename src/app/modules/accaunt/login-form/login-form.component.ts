import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { AuthResponse } from '../../core/auth/models';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Input() labelLogin: string;
  @Input() labelReg: string;
  @Input() labelPassword: string;
  @Input() labelForgotPassword: string;
  @Input() labelSubmit: string;
  @Input() placeholderLogin: string;
  @Input() placeholderPassword: string;

  /**
   *
   */
  constructor(
    public auth: AuthService,
    // private ngxService: NgxUiLoaderService,
    // private toastr: ToastrService,
    private router: Router
  ) {}

  authForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    // this.ngxService.start();
    // this.toastr.clear();
    const form = this.authForm.value;
    this.auth.login(form.login, form.password).subscribe(this.authHandler);
  }

  authHandler = (data: AuthResponse) => {
    // this.ngxService.stopAll();
    this.auth.saveToken(data.data.token);
    this.auth.onAuth();
    this.authForm.reset();
    this.router.navigate(['/']);
  }

}
