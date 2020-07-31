import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-callback-dialog',
  templateUrl: './callback-dialog.component.html',
  styleUrls: ['./callback-dialog.component.scss']
})
export class CallbackDialogComponent implements OnInit {
  public callbackForm: FormGroup;

  constructor(
      public dialogRef: MatDialogRef<CallbackDialogComponent>
  ) { }

  public ngOnInit(): void {
    this.generateCallbackForm();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public generateCallbackForm() {
    this.callbackForm = new FormGroup({
      name: new FormControl('', []),
      phone: new FormControl('', [])
    });
  }

  public onSubmit() {
    const form = this.callbackForm.value;
    console.log(form);
  }
}
