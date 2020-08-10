import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
// import { NgxUiLoaderService } from "ngx-ui-loader";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { ProductService } from "src/app/modules/product/product.service";
import { PaginationPage } from "src/app/modules/ui/rap/pagination/pagination-page";
import { IManufacturerReviews } from 'src/app/modules/review/review';
import { ReviewService } from 'src/app/modules/review/review.service';
import { FilterService } from '../../filter/filter.service';
import { CurrencyService } from '../../currency/currency.service';
import { IFilters } from '../../filter/filter.component';

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.scss"],
})
export class ProductsPageComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [];
  Math = Math;
  public sortProductsData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private ngxService: NgxUiLoaderService,
    public product: ProductService,
    public filter: FilterService,
    public currency: CurrencyService,
    public review: ReviewService
  ) {
    // this.getPriceFilter();
  }

  // getPriceFilter() {
  //   this.filter.getPriceFilter().subscribe(this.getPriceFilterHandler)
  // }
  // getPriceFilterHandler = data => {
  //   this.filter.price = data.data;
  //   this.filter.priceModel.max = data.data.max;
  //   this.filter.priceModel.min = data.data.min;
  // }

  id: number = 0;

  getByIdHandler = (data) => {
    // this.ngxService.stopAll();
    this.product.products = data;

    this.breadcrumbs[1] = {
      link: "/products" + "/" + this.id,
      title: this.product.products.data.category.id,
    };
  };

  ngOnInit(): void {
    this.route.params.subscribe((data) => {  
    
      this.id = data["id"];

      this.breadcrumbs = [
        {
          link: "/",
          title: "Homepage",
        },
      ];     
      this.get();
      this.getLastReviews();
    });

    this.sortProducts();
  }

  public onFilterChanged(filters: IFilters): void {
    this.product.getByFilters(filters).subscribe((data) => {
      this.product.products = data;
      console.log(this.product.products.count);
    });

  }

  public sortProducts(): void {
    this.sortProductsData = ['price', 'rating'];
  }

  get() {
    // this.ngxService.start();
    this.product.getBy(this.id).subscribe(this.getByIdHandler);
  }

  getLastReviews() {
    this.review.get().subscribe(this.getLastReviewsHandler)
  }
  getLastReviewsHandler = data => {
    this.review.review = data.data;
  } 
  pageChangedHandler(page: number): void {
    this.product.page = page;
    this.get();
  } 

  public changeMaterialCategory(event) {
    this.product.sortBy(event.value).subscribe((res) => {
      this.product.products.data.products = res.data.products;
    });
  }
}
