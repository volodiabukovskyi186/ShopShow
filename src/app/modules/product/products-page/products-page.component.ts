import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
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
export class ProductsPageComponent implements OnInit,OnChanges {
  breadcrumbs: Array<NavLink> = [];
  Math = Math;
  public sortProductsData: any;
  public cardNumbers: number[] = [];
  selectedCardNumber: number;
  selectedSorting: string;
  promotions: any[] = [];
  selectStatus = false;
  selectStatusBy = false;
  currentCategory:number;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public product: ProductService,
      public filter: FilterService,
      public currency: CurrencyService,
      public review: ReviewService,

  ) {

  }
  allCategory: any;
  id: number = 0;

  getByIdHandler = (data) => {
    this.product.products = data;
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCategoryBread(id)
  }

  ngOnInit(): void {
    this.checkChangesCategory()
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
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCategoryBread(id)
    this.sortProducts();

    this.cardNumbers = [3, 6, 9, 12, 15, 17, 20, 100];

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('wqeqweqweqweq')
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCategoryBread(id)
  }
  checkChangesCategory(): void {
    this.router.events.subscribe((event: Event) => {
      // if (event instanceof NavigationEnd) {
      //   const id = +this.route.snapshot.paramMap.get('id');
      //     console.log('rounte====>>',this.route.snapshot)
      //   this.getCategoryBread(id)
      // }
    })
    this.filter.SCategory.subscribe(data => {
      const id = +this.route.snapshot.paramMap.get('id');
      this.getCategoryBread(id)
    })
  }


  getCategoryBread(arrCateg): void {

    // debugger;
    this.router.navigate([`/products/${arrCateg}`])
    this.filter.getParentCategory(arrCateg).subscribe(data=>{
      console.log('breadcums===>', data);
      data.data.forEach((elem,index)=>{
        this.breadcrumbs[index+1] = {
          link: "/products" + "/" + elem.id,
          title: elem.name,

        };
      })

    })

    // debugger;
    // console.log('tttttttttttt=> ', arrCateg);
    // console.log('ppppppppp++.', this.product.products)
    // arrCateg.forEach((elem, index) => {
    //   this.breadcrumbs[index + 1] = {
    //     link: `/products/${this.id}`,
    //     title: elem.name,
    //   };
    // })

  }


  public onFilterChanged(filters: IFilters): void {

    this.allCategory = filters;
    this.product.getByFilters(filters).subscribe((data) => {
      this.product.products = data;

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

  // public changeMaterialCategory(event, cardNumber?: number) {
  //   console.log(event);
  //   console.log(cardNumber);
  //   this.product.sortBy(event.value, cardNumber).subscribe((res) => {
  //     this.product.products.data.products = res.data.products;
  //   });
  // }

  public onSortingChanged(sorting: string) {
    this.selectStatusBy = true;

    this.selectedSorting = sorting;
    this.product.sortBy(this.selectedSorting, this.selectedCardNumber).subscribe((res) => {
      if (this.selectedSorting !== 'promotions') {
        this.product.products = res;
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
    this.selectStatus = true;
    this.selectedCardNumber = cardNumber;
    this.product.sortBy(this.selectedSorting, this.selectedCardNumber).subscribe((res) => {
      this.product.products = res;
    });
  }
}
