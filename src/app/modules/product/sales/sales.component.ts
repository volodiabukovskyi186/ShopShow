import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Event, Router} from '@angular/router';
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
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [];
  Math = Math;
  public sortProductsData: any;
  public cardNumbers: number[] = [];
  selectedCardNumber: number;
  selectedSorting: string;
  promotions: any[] = [];
  //id: number = 0;
  selectStatus = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private ngxService: NgxUiLoaderService,
    public product: ProductService,
    public filter: FilterService,
    public currency: CurrencyService,
    public review: ReviewService
  ) {}

  getByIdHandler = (data) => {
    this.product.products = data;
    console.log(this.product?.products?.data?.products);
    this.product.products.data.products = this.product?.products?.data?.products.filter((product) => {
      return product?.discont !== null;
    })
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.getCategoryBread(id)
    console.log('after', this.product?.products?.data?.products);
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
      // this.getCategoryBread(id)
      this.get();
      this.getLastReviews();
    });

    this.cardNumbers = [3, 6, 9, 12, 15, 17, 20, 100];
  }
  // checkChangesCategory(): void {
  //   this.router.events.subscribe((event: Event) => {
  //     // if (event instanceof NavigationEnd) {
  //     //   const id = +this.route.snapshot.paramMap.get('id');
  //     //     console.log('rounte====>>',this.route.snapshot)
  //     //   this.getCategoryBread(id)
  //     // }
  //   })
  //   this.filter.SCategory.subscribe(data => {
  //     const id = +this.route.snapshot.paramMap.get('id');
  //     this.getCategoryBread(id)
  //   })
  // }


  // getCategoryBread(arrCateg): void {
  //   // debugger;
  //   this.router.navigate([`/products/${arrCateg}`])
  //   this.filter.getParentCategory(arrCateg).subscribe(data => {
  //     console.log('breadcums===>', data);
  //     data.data.forEach((elem, index) => {
  //       this.breadcrumbs[index + 1] = {
  //         link: "/products" + "/" + elem.id,
  //         title: elem.name,
  //
  //       };
  //     })
  //
  //   })
  // }
  public onFilterChanged(filters: IFilters): void {
    this.product.getByFilters(filters).subscribe((res) => {
      this.product.products.data.products = res?.data?.products?.filter((val) => {
        return val.discont !== null;
      })
    });

  }

  get() {
    // this.ngxService.start();
    this.product.getProducts().subscribe(this.getByIdHandler);
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

  public onSortingChanged(sorting: string) {
    this.selectStatus=true;
    this.selectedSorting = sorting;
    this.product.sortBy(this.selectedSorting, this.selectedCardNumber).subscribe((res) => {

      if (this.selectedSorting !== 'promotions' || this.selectedSorting === 'promotions') {
        this.product.products.data.products = res?.data?.products?.filter((val) => {
          return val.discont !== null;
        })

      }
    });
  }

  public onCardNumberChanged(cardNumber: number) {

    this.selectedCardNumber = cardNumber;
    this.product.sortBy(this.selectedSorting, this.selectedCardNumber).subscribe((res) => {
      this.product.products.data.products = res?.data?.products?.filter((val) => {
        return val.discont !== null;
      })
    });
  }
}
