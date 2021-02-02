import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import {LiqpayService} from '../service/liqpay.service';

@Component({
  selector: 'app-liqpay-dialog',
  templateUrl: './liqpay-dialog.component.html',
  styleUrls: ['./liqpay-dialog.component.scss']
})
export class LiqpayDialogComponent implements OnInit, AfterViewInit {
  liqPayM;
  
  constructor(
    public dialogRef: MatDialogRef<LiqpayDialogComponent>,
    public sanitizer: DomSanitizer,
    private liqpayService: LiqpayService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngAfterViewInit(): void {
    let form = document.getElementById("payForm") as HTMLFormElement;
    form.submit();

    const paymentFormSubmit = form.submit();
    console.log(paymentFormSubmit);
  }
  
  //5168 7551 0456 8544
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
  checkliqpay(): void {
    let i = 0;

  }

  public onSubmit(event): void {
    console.log('LIQPAY EVENT ====== >>>> !!!!! ', event);
  }
}
