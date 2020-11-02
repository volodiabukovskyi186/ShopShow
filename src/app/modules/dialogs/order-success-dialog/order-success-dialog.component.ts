import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-success-dialog',
  templateUrl: './order-success-dialog.component.html',
  styleUrls: ['./order-success-dialog.component.scss']
})
export class OrderSuccessDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OrderSuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  public ngOnInit(): void {
    console.log(this.data);
  }

  public onNoClick(): void {
    this.dialogRef.close(this.data);
  }
}
