import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ProductService } from "src/app/modules/product/product.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public cardNumbers: any[] = [];
  Math = Math;
  selectedCardNumber: number;
  selectedSorting: string;
  promotions: any[] = [];

  constructor(
    public product: ProductService
  ) { }

  ngOnInit(): void {
    this.cardNumbers = [3, 6, 9, 12, 15, 17, 20, 100];
  }

  public onSortingChanged(sorting: string) {
    this.selectedSorting = sorting;
    this.product.sortBy(this.selectedSorting, this.selectedCardNumber).subscribe((res) => {
      if (this.selectedSorting !== 'promotions') {
        this.product.products.data.products = res.data.products;
      }

      if (this.selectedSorting === 'promotions') {
        console.log(this.product.products.data.products);
        
        res.data.products.forEach((val) => {
          if (val.promotion) {
            this.promotions.unshift(val);
          }
          if (val.promotion === null) {
            this.promotions.push(val);
          }
        })

        this.product.products.data.products = this.promotions;
      }
    });
  }

  public onCardNumberChanged(cardNumber: number) {
    this.selectedCardNumber = cardNumber;
    this.product.sortBy(this.selectedSorting, this.selectedCardNumber).subscribe((res) => {
      this.product.products.data.products = res.data.products;
    });
  }

  // public changeMaterialCategory(event: MatSelectChange, cardNumber?: number) {
  //   console.log(event);
  //   console.log(this.product.products);

  //   this.product.sortBy(event.value, cardNumber).subscribe((res) => {
  //     this.product.products.data.products = res.data.products;
  //   });
  // }

}
