import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { ProductService } from "src/app/modules/product/product.service";
import { PaginationPage } from "src/app/modules/ui/rap/pagination/pagination-page";
import { ReviewService } from 'src/app/modules/review/review.service';
import { FilterService } from '../../filter/filter.service';
import { CurrencyService } from '../../currency/currency.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSelectChange } from '@angular/material/select';
import { IFilters } from '../../filter/filter.component';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [];
  search: string;
  Math = Math;
  public sortProductsData: any;
  public sortedProducts: any;
  public cardNumbers: any[] = [];
  selectedCardNumber: number;
  selectedSorting: string;
  promotions: any[] = [];

  constructor(
      private route: ActivatedRoute,
      public product: ProductService,
      public filter: FilterService,
      public currency: CurrencyService,
      public review: ReviewService,
      private http: HttpClient,
  ) {
    // this.getPriceFilter();
  }

  public ngOnInit(): void {
    this.breadcrumbs = [
      {
        link: "/",
        title: "Homepage",
      },
    ];

    this.route.queryParams
        .subscribe(data => {
          this.search = data.search;
          this.get();
          this.getLastReviews();
        });

    this.sortProducts();

    this.cardNumbers = [3, 6, 9, 12, 15, 17, 20, 100];
  }

  public sortProducts(): void {
    this.sortProductsData = ['price', 'rating'];
  }

  // public getPriceFilter() {
  //   this.filter.getPriceFilter().subscribe(this.getPriceFilterHandler);
  // }

  // public getPriceFilterHandler = data => {
  //   this.filter.price = data.data;
  //   this.filter.priceModel.max = data.data.max;
  //   this.filter.priceModel.min = data.data.min;
  // }

  id: number = 0;

  public searchHandler = (data) => {
    this.product.products.data.products = data.data;
    this.product.products.count = data.count;
    this.breadcrumbs[1] = {
      link: '/#',
      title: 'SearchResult',
    };
  }

  public get() {
    this.product.search(this.search).subscribe(this.searchHandler);
  }

  public getLastReviews() {
    this.review.get().subscribe(this.getLastReviewsHandler);
  }
  public getLastReviewsHandler = data => {
    this.review.review = data.data;
  }

  public pageChangedHandler(page: number): void {
    this.product.page = page;
    this.get();
  }

  // public changeMaterialCategory(event: MatSelectChange, cardNumber?: number) {
  //   console.log(event);
  //   console.log(this.product.products);

  //   this.product.sortBy(event.value, cardNumber).subscribe((res) => {
  //     this.product.products.data.products = res.data.products;
  //   });
  // }

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

  public sort(sorted): void {
    console.log(sorted);
  }

  public onFilterChanged(filters: IFilters): void {
    this.product.getByFilters(filters).subscribe((data) => {
      this.product.products.data.products = data.data.products;
      this.product.products.count = data.count;
    });

  }
}
