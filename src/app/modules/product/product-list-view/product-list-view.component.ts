import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { ProductService } from "src/app/modules/product/product.service";
import { PaginationPage } from "src/app/modules/ui/rap/pagination/pagination-page";
import { ReviewService } from 'src/app/modules/review/review.service';
import { FilterService } from '../../filter/filter.service';
import { CurrencyService } from '../../currency/currency.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit, PaginationPage {
  breadcrumbs: Array<NavLink> = [];
  search: string;
  Math = Math;

  constructor(
      private route: ActivatedRoute,
      public product: ProductService,
      public filter: FilterService,
      public currency: CurrencyService,
      public review: ReviewService
  ) {
    this.getPriceFilter();
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
  }

  public getPriceFilter() {
    this.filter.getPriceFilter().subscribe(this.getPriceFilterHandler);
  }

  public getPriceFilterHandler = data => {
    this.filter.price = data.data;
    this.filter.priceModel.max = data.data.max;
    this.filter.priceModel.min = data.data.min;
  }

  id: number = 0;

  public searchHandler = (data) => {
    this.product.products = data;
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

  public pageToHandler(page: number): void {
    this.product.page = page;
  }

  public pagePrevHandler(): void {
    this.product.page--;
  }

  public pageNextHandler(): void {
    this.product.page++;
  }

  public pageChangedHandler(): void {
    this.get();
  }
}
