import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router , ActivatedRoute , Event, NavigationEnd} from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { AuthResponse } from '../../core/auth/models';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() labelLogin: string;
  @Input() labelReg: string;
  @Input() labelPassword: string;
  @Input() labelForgotPassword: string;
  @Input() labelSubmit: string;
  @Input() placeholderLogin: string;
  @Input() placeholderPassword: string;
  @Input() isCheckoutComponent;
  @Input() checkout;
  public  logPage
  /**
   *
   */
  constructor(
    public auth: AuthService,
    // private ngxService: NgxUiLoaderService,
    // private toastr: ToastrService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const categoryName = this.activateRoute.snapshot
        console.log('activeRoute=>', categoryName);
      }
    })
  }
  l

  ngOnInit() {
    console.log(this.isCheckoutComponent);
  }

  authForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  goToHomePage(name): void {
    this.logPage = name
    // this.router.navigate(['/']);
  }

  goToCheckoutComponent(name): void {
    this.logPage = name;

  }

  onSubmit() {
    // this.ngxService.start();
    // this.toastr.clear();
    const form = this.authForm.value;
    this.auth.login(form.login, form.password).subscribe(this.authHandler);
  }
  authHandler = (data: AuthResponse) => {

    this.auth.saveToken(data.data.token);
    this.auth.onAuth();
    this.authForm.reset();

    if( this.logPage=="mainLog"){
      this.router.navigate(['/']);
    }
    else {
      this.router.navigate(['/checkout']);
    }

  }

  get formAuthControls(): any {
    return this.authForm['controls'];
  }

}
