import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-galery-product-foto-dialog',
    templateUrl: './galery-product-foto-dialog.component.html',
    styleUrls: ['./galery-product-foto-dialog.component.scss']
})
export class GaleryProductFotoDialogComponent implements OnInit {
    public productImagesSrc: any;
    public host = environment.hoststatic;
    public index = 0;

    constructor(
        public dialogRef: MatDialogRef<GaleryProductFotoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public products: any,
    ) {}

    public ngOnInit(): void {
        this.productImagesSrc = this.products.product;

        this.productImagesSrc.forEach((product, index) => {
            if (product.id === this.products.currentProduct.id) {
                 this.index = index;
            }
        });
    }

    public onNoClick(): void {
        this.dialogRef.close(this.products);
    }

    public slidePrev(): void {
      if (0 !== this.index) {
        --this.index;
      } else {
        this.index = this.productImagesSrc.length - 1;
      }
    }

    public slideNext(): void {
        if ((this.productImagesSrc.length - 1) !== this.index) {
          ++this.index;
        } else {
          this.index = 0;
        }
    }
}
