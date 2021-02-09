import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router , ActivatedRoute , Event, NavigationEnd} from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { AuthResponse } from '../../core/auth/models';
import { HelperService } from '../../core/helper.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  @Input() labelLogin: string;
  @Input() labelReg: string;
  @Input() labelPassword: string;
  @Input() labelForgotPassword: string;
  @Input() labelSubmit: string;
  @Input() placeholderLogin: string;
  @Input() placeholderPassword: string;
  @Input() isCheckoutComponent;
  @Input() checkout;

  public  logPage;
  public isInvalidLoginOrPass: boolean = false;
  private loginStatusStraem$: any;
  private onDestroyed$: Subject<void> = new Subject<void>();
  /**
   *
   */
  constructor(
    public auth: AuthService,
    // private ngxService: NgxUiLoaderService,
    // private toastr: ToastrService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    public helperService: HelperService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const categoryName = this.activateRoute.snapshot
      }
    })
  }
  l

  public ngOnInit(): void {
    this.helperService.getLoginStatus$()
      .pipe(takeUntil(this.onDestroyed$))
      .subscribe((res) => {
        console.log(res);
        if (res && res.status === 400 && res.message === "Invalid login or password!") {
          this.isInvalidLoginOrPass = true;
        } else {
          this.isInvalidLoginOrPass = false;
        }
      })

    // this.loginStatusStraem$ = this.helperService.getLoginStatus$().subscribe((res) => {
    //   console.log(res);

    //   if (res) {
    //     this.isInvalidLoginOrPass = true;
    //   } else {
    //     this.isInvalidLoginOrPass = false;
    //   }
    // })
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

  public onSubmit(): void {
    // this.ngxService.start();
    // this.toastr.clear();
    const form = this.authForm.value;
    this.auth.login(form.login, form.password).subscribe(this.authHandler);
  }

  authHandler = (data: AuthResponse) => {
    if (data) {
      this.isInvalidLoginOrPass = false;
    }
    console.log(data);

    this.auth.saveToken(data.data.token);
    this.auth.onAuth();
    this.authForm.reset();

    if (this.logPage == "mainLog") {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/checkout']);
    }
  }

  get formAuthControls(): any {
    return this.authForm['controls'];
  }

  public ngOnDestroy(): void {
    // if (this.loginStatusStraem$) {
    //   this.loginStatusStraem$.unsubscribe();
    // }
    this.onDestroyed$.next();
    this.onDestroyed$.complete();
  }
}
