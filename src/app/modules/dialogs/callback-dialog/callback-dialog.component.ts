import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactService } from "../../../modules/contact/contact.service";

@Component({
  selector: 'app-callback-dialog',
  templateUrl: './callback-dialog.component.html',
  styleUrls: ['./callback-dialog.component.scss']
})
export class CallbackDialogComponent implements OnInit {
  public callbackForm: FormGroup;
  public isCallbackForm: boolean = true;

  @Input() title: string;

  constructor(
      public dialogRef: MatDialogRef<CallbackDialogComponent>,
      private contactService: ContactService,
  ) { }

  public ngOnInit(): void {
    this.generateCallbackForm();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public generateCallbackForm(): void {
    this.callbackForm = new FormGroup({
      name: new FormControl('', []),
      phone: new FormControl('', [])
    });
  }

  public onSubmit(): void {
    const data = this.callbackForm.value;
  
    this.contactService.sendCallbackData(data);

    this.isCallbackForm = false;
  }
}
