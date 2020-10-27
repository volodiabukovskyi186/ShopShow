import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.scss']
})
export class ReviewDialogComponent implements OnInit {
  public host = environment.hoststatic;

  constructor(
    public dialogRef: MatDialogRef<ReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public orders: any,
  ) { }

  public ngOnInit(): void {
    console.log(this.orders);
    console.log(this.orders.order.products);
  }

  public onNoClick(): void {
    this.dialogRef.close(this.orders);
  }

}
