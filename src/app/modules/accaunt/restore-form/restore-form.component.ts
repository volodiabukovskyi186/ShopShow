import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-restore-form',
  templateUrl: './restore-form.component.html',
  styleUrls: ['./restore-form.component.scss']
})
export class RestoreFormComponent implements OnInit {

  @Input() labelEmail: string = "Email";
  @Input() labelLogin: string = "Login";
  @Input() labelReg: string = "Login";

  
  @Input() labelForgotPassword: string = "Forgot password?";
  @Input() labelSubmit: string = "Submit";

  @Input() placeholderEmail: string = "Enter your email";
  @Output() resetBtnClicked = new EventEmitter();

  public isResetBtnClicked: boolean = false;
  host = environment.hoststatic;
 
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
    // throw new Error("Method not implemented.");
  }

  authForm = new FormGroup({
    email: new FormControl("", Validators.required)
  });

  onSubmit() {
    // this.ngxService.start();
    // this.toastr.clear();

    let form = this.authForm.value;
    this.data = form;
    this.auth.restore(form).subscribe(this.restoreHandler);
  }

  data = this.authForm.value

  restoreHandler = (data: any) => {
    // this.ngxService.stopAll();
  };

  public successResetPassword(): void {
    this.isResetBtnClicked = true;

    this.resetBtnClicked.emit(this.isResetBtnClicked);
  }

}
