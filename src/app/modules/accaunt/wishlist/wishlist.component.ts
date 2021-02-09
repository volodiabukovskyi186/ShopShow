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
  public allwishlistData: any;
  public page: number = 1;
  public isWishlistProducts: boolean = false;

  constructor(
    public product: ProductService,
    public accaunt: AccauntService,
    public wishlistService: WishlistService
  ) { }

  ngOnInit(): void {
    this.cardNumbers = [3, 6, 9, 12, 15, 17, 20, 100];
    if (localStorage.hasOwnProperty('token')) {
      this.getClientWishlistByClientId();
    }
  }

  public onSortingChanged(sorting: string) {

    this.selectedSorting = sorting;
    this.wishlistService.getUserWishlistByClientId(this.clientId, this.selectedSorting, this.selectedCardNumber).subscribe((res) => {
      if (this.selectedSorting !== 'promotions') {
        this.wishlistProducts = res.data;
        this.allwishlistData = res;
      }

      if (this.selectedSorting === 'promotions') {
        //console.log(this.product.products.data.products);
        
        res.data.products?.forEach((val) => {
          if (val.promotion) {
            this.promotions.unshift(val);
          }
          if (val.promotion === null) {
            this.promotions.push(val);
          }
        })

        this.wishlistProducts = this.promotions;
      }
    });
  }

  public onCardNumberChanged(cardNumber: number) {
    this.selectedCardNumber = cardNumber;
    this.wishlistService.getUserWishlistByClientId(this.clientId, this.selectedSorting, this.selectedCardNumber).subscribe((res) => {
      this.wishlistProducts = res.data;
      this.allwishlistData = res;
    });
  }

  public getClientWishlistByClientId(): void {
    this.accaunt.getUser().subscribe((res) => {
      this.clientId = res.data.user.id;


        this.wishlistService.getUserWishlistByClientId(this.clientId).subscribe((res) => {
          setTimeout(() => {
            this.isWishlistProducts = true;
          }, 5000);

          this.wishlistProducts = res.data;
          console.log('this.wishlistProducts ===== >>>>', this.wishlistProducts);
          this.allwishlistData = res;
        })

      // this.accaunt.current = data.data;
      // this.accaunt.onCurrent();
      // console.log(data.data);
    });
  }

  public updatedWishlistProducts(event): void {
    this.wishlistProducts = event;
  }

  
  pageChangedHandler(page: number): void {
    this.page = page;
    if (localStorage.hasOwnProperty('token')) {
      this.getClientWishlistByClientId();
    }
  }
}
