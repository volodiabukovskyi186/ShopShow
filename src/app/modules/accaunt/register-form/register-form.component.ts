import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from '../../core/auth/auth.service';

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

  authForm = new FormGroup({
    phone: new FormControl(""),
    email: new FormControl(""),
    first_name: new FormControl(""),
    last_name: new FormControl(""),
    password: new FormControl(""),
  });

  onSubmit() {
    // this.ngxService.start();
    // this.toastr.clear();
    this.isSubmit = true;

    let form = this.authForm.value;
    this.data = form;
    this.auth.signup(form).subscribe(this.signupHandler);
  }

  isSubmit:boolean = false;

  data = this.authForm.value

  signupHandler = (data: any) => {
    this.isSubmit = false;
    // this.ngxService.stopAll();
  };
}
