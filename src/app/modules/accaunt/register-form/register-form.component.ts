import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from '../../core/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { throwError, Subject } from "rxjs";
import { map, catchError } from "rxjs/operators";

export interface IRegUser {
  phone: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent implements OnInit {
  @Input() labelEmail: string = "Email";
  @Input() labelLogin: string = "Login";

  @Input() labelPassword: string = "Password";
  @Input() labelPhone: string = "Phone";
  @Input() labelFirstName: string = "First name";
  @Input() labelLastName: string = "Last name";

  @Input() labelForgotPassword: string = "Forgot password?";
  @Input() labelSubmit: string = "Submit";

  @Input() placeholderEmail: string = "Enter your email";
  @Input() placeholderPhone: string = "Enter your phone number";
  @Input() placeholderFirstName: string = "Enter your first name";
  @Input() placeholderLastName: string = "Enter your last name";
  @Input() placeholderPassword: string = "Enter your password";

  public errorMessage: string;
  public register$: Observable<any>;
  public isSuccessRegistration: boolean = false;
  public isRegistrationError: boolean = false;

  /**
   *
   */
  constructor(
    public auth: AuthService,
    // private ngxService: NgxUiLoaderService,
    // private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isSubmit = false;
  }

  // "role_id": 3,
  // "email" : "client88888@client.com.ua",
  // "password": "client",
  // "first_name": "Tom",
  // "last_name": "Ellis",
  // "permissions": "[]",
  // "secret": "secret",
  // "city": "city",
  // "country": "country",
  // "delivery_adress": "adress",
  // "phone": "+380731129081",
  // "is_subscription" : false

  authForm = new FormGroup({
    role_id: new FormControl(3),
    phone: new FormControl(""),
    email: new FormControl(""),
    first_name: new FormControl(""),
    last_name: new FormControl(""),
    password: new FormControl(""),
    secret: new FormControl("secret"),
    permissions: new FormControl([]),
    delivery_adress: new FormControl(""),
    city: new FormControl(""),
    country: new FormControl(""),
    is_subscription: new FormControl(true)
  });

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message);
    }
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
  }

  onSubmit() {
    // this.ngxService.start();
    // this.toastr.clear();
    this.isSubmit = true;
    let form = this.authForm.value;
    console.log(form);
    
    this.data = form;

    this.auth.signup(form)
    .then((res) => {
      console.log(res);
      if (res) {
        this.isSuccessRegistration = true;
        this.isRegistrationError = false;

        this.signupHandler(res);

        console.log('try');
      }
      if(!res) {
        this.isRegistrationError = true;
        this.isSuccessRegistration = false;
      }
    })
    // .catch((err) => {
    //   console.log(err);
    //     this.handleError(err);
    //     console.log(err);
    //     console.log('dfrdfdfrfedfvdf');
      
    // })
    // .subscribe(
    //   ()=> {
    //     console.log('asgfgsa')
    //   })
      // (response) => {
      //   console.log(response);
      //   // if (!response) {
      //   //   console.log(false);
      //   // }
      //   // if (response) {
      //   //   console.log(true);
      //   // }
      //   this.signupHandler(response);
      // }, 
      // (err) => {
      //   this.handleError(err);
      // });

    // .pipe(
    //   catchError(error => {
    //       let errorMsg: string;
    //       if (error.error instanceof ErrorEvent) {
    //           this.errorMessage= `Error: ${error.error.message}`;
    //       } else {
    //         this.errorMessage = this.getServerErrorMessage(error);
    //       }
    //       console.log(errorMsg);
    //       console.log(throwError(errorMsg));
    //       console.log(error);
    //       console.log(this.errorMessage);

    //       return throwError(errorMsg);
    //   })
    // );
  }

  isSubmit:boolean = false;

  data = this.authForm.value

  signupHandler = (data: any) => {
    this.isSubmit = false;
    // this.ngxService.stopAll();
  };

  get formRegisterControls(): any {
    return this.authForm['controls'];
  }
}
