import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-liqpay-dialog',
  templateUrl: './liqpay-dialog.component.html',
  styleUrls: ['./liqpay-dialog.component.scss']
})
export class LiqpayDialogComponent implements OnInit, AfterViewInit {
  
  constructor(
    public dialogRef: MatDialogRef<LiqpayDialogComponent>,
    public sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngAfterViewInit(): void {
    let form = document.getElementById("payForm") as HTMLFormElement;
    form.submit();
  }

  public ngOnInit(): void {
    console.log(this.data);
   
  }

  public onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  public confirmPayment(): void {
    //this.isPaymentBtnClicked = true;
  }

  public getUrl(postUrl) {
    //setTimeout(() => postUrl, 2);

    return this.sanitizer.bypassSecurityTrustResourceUrl(postUrl);
  }
}
