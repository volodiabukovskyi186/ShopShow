import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CallbackSuccessDialogComponent} from '../callback-success-dialog/callback-success-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-review-dialog',
  templateUrl: './add-review-dialog.component.html',
  styleUrls: ['./add-review-dialog.component.scss']
})
export class AddReviewDialogComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<CallbackSuccessDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public contactData: any,
      private router: Router,
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
  public btnMain():void{
    this.dialogRef.close(this.contactData);


  }

}
