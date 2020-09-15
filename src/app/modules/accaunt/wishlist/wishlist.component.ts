import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ProductService } from "src/app/modules/product/product.service";
import { AccauntService } from '../accaunt.service';
import { WishlistService } from '../wishlist/services/wishlist.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public cardNumbers: any[] = [];
  public Math = Math;
  public selectedCardNumber: number;
  public selectedSorting: string;
  public promotions: any[] = [];
  public wishlistProducts: any[] = [];
  public clientId: number;

  constructor(
    public product: ProductService,
    public accaunt: AccauntService,
    public wishlistService: WishlistService
  ) { }

  ngOnInit(): void {
    this.cardNumbers = [3, 6, 9, 12, 15, 17, 20, 100];
    this.getClientWishlistByClientId();
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

  public getClientWishlistByClientId(): void {
    this.accaunt.getUser().subscribe((res) => {
      this.clientId = res.data.user.id;
        console.log(this.clientId);

        this.wishlistService.getUserWishlistByClientId(this.clientId).subscribe((res) => {
          this.wishlistProducts = res.data.wishlist;
          console.log(this.wishlistProducts);
        })

      // this.accaunt.current = data.data;
      // this.accaunt.onCurrent();
      // console.log(data.data);
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
