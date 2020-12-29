import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Event, NavigationEnd, Router} from '@angular/router';
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { ProductService } from "src/app/modules/product/product.service";
import { ReviewService } from 'src/app/modules/review/review.service';
import { FilterService } from '../../filter/filter.service';
import { CurrencyService } from '../../currency/currency.service';
import { IFilters } from '../../filter/filter.component';
// import { NgxUiLoaderService } from "ngx-ui-loader";

import {SalesService} from '../sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit, OnChanges {

  breadcrumbs: Array<NavLink> = [];
  Math = Math;
  public cardNumbers: number[] = [];
  selectedCardNumber: number = 0;
  promotions: any[] = [];
  selectStatus = false;
  selectStatusBy = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public product: ProductService,
      public filter: FilterService,
      public currency: CurrencyService,
      public review: ReviewService,
      public salesService: SalesService,

  ){}
  allCategory: IFilters = {
    categories: [],
    manufacturers:[],
    minPrice: 0,
    maxPrice:0,
    sortPrice: ''
  };
  id: number = 0;

  getByIdHandler = (data) => {
    this.product.products = data;
    this.product.products.data.products = this.product?.products?.data?.products.filter((product) => {
      return product?.discont !== null;
    });

  };

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.breadcrumbs = [
        {
          link: "/",
          title: "Homepage",
        },
        {
          link: "/sales",
          title: "Sales",
        },
      ];
      const id = +this.route.snapshot.paramMap.get('id');
      this.get();
      this.getLastReviews();
    });
    this.cardNumbers = [3, 6, 9, 12, 15, 17, 20, 100];
  }
  ngOnChanges(changes: SimpleChanges) {
  }

  get() {
    this.product.getByDiscount().subscribe(this.getByIdHandler);
  }

  getLastReviews() {
    this.review.get().subscribe(this.getLastReviewsHandler)
  }
  getLastReviewsHandler = data => {
    this.review.review = data.data;
  }
  pageChangedHandler(page: number): void {

    this.salesService.page = page;
    this.onFilterChanged(this.allCategory)
  }

  public onFilterChanged(filters: IFilters): void {
    this.allCategory = filters;
    this.salesService.getByFiltersSale(this.allCategory).subscribe((data) => {
      this.salesService.products = data;
    });
  }

  public onSortingChanged(sorting: string) {
    this.allCategory.sortPrice = sorting;
    this.salesService.getByFiltersSale(this.allCategory, this.selectedCardNumber).subscribe((data) => {
      this.salesService.products = data;
    });
  }

  public onCardNumberChanged(cardNumber: number) {
    this.salesService.productCount = cardNumber;
    this.selectStatus = true;
    this.selectedCardNumber = cardNumber;
    this.salesService.getByFiltersSale(this.allCategory,this.selectedCardNumber).subscribe((data) => {
      this.salesService.products = data;
    })
  }


}
