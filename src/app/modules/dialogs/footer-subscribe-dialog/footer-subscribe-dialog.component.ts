import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CallbackSuccessDialogComponent} from '../callback-success-dialog/callback-success-dialog.component';

@Component({
  selector: 'app-footer-subscribe-dialog',
  templateUrl: './footer-subscribe-dialog.component.html',
  styleUrls: ['./footer-subscribe-dialog.component.scss']
})
export class FooterSubscribeDialogComponent implements OnInit {

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
  close():void{
    this.dialogRef.close(this.contactData);
  }

}
