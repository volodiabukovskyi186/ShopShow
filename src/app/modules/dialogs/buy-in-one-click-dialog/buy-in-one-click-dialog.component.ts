import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-buy-in-one-click-dialog',
  templateUrl: './buy-in-one-click-dialog.component.html',
  styleUrls: ['./buy-in-one-click-dialog.component.scss']
})
export class BuyInOneClickDialogComponent implements OnInit {
  public buyInOneClickForm: FormGroup;
  public isbuyInOneClickForm: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<BuyInOneClickDialogComponent>,
  ) { }

  public ngOnInit(): void {
    this.generateBuyInOneClickForm();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public generateBuyInOneClickForm(): void {
    this.buyInOneClickForm = new FormGroup({
      name: new FormControl('', []),
      phone: new FormControl('', [])
    });
  }

  public onSubmit(): void {
    const data = this.buyInOneClickForm.value;
  
    //this.contactService.sendCallbackData(data);

    this.isbuyInOneClickForm = false;
  }

}
