import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-callback-success-dialog',
  templateUrl: './callback-success-dialog.component.html',
  styleUrls: ['./callback-success-dialog.component.scss']
})
export class CallbackSuccessDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CallbackSuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public contactData: any,
  ) { }

  ngOnInit(): void {
    console.log(this.contactData);
  }

  public onNoClick(): void {
    this.dialogRef.close(this.contactData);
  }

}
