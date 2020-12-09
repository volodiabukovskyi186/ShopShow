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
  selectedCardNumber: number=0;
  selectedSorting: string;
  promotions: any[] = [];
  selectStatus = false;
  selectStatusBy = false;
  currentCategory: number ;
  curencyMove: string = '';
  routeId:number;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public product: ProductService,
      public filter: FilterService,
      public currency: CurrencyService,
      public review: ReviewService,

  ) {

  }
  allCategory: IFilters = {
    categories: [],
    manufacturers:[],
    minPrice: 0,
    maxPrice: 0,
    sortPrice: ''
  };
  id: number = 0;

  getByIdHandler = (data) => {
    this.product.products = data;
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCategoryBread(id)
  }

  ngOnInit(): void {
    this.checkChangesCategory()
    this.route.params.subscribe((data) => {
      this.id = data["id"]
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
    this.onFilterChanged(this.allCategory)
    this.cardNumbers = [3, 6, 9, 12, 15, 17, 20, 100];

  }

  ngOnChanges(changes: SimpleChanges) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.routeId = id;
    this.getCategoryBread(id);
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {

        this.getCategoryBread(id)
      }
    })

  }
  checkChangesCategory(): void {
    this.onSortingChanged('')
    this.filter.SCategory.subscribe(data => {
      const id = +this.route.snapshot.paramMap.get('id');
      this.getCategoryBread(id)
    })
  }


  getCategoryBread(arrCateg): void {
    this.router.navigate([`/products/${arrCateg}`])
    this.currentCategory = arrCateg;
    this.filter.getParentCategory(arrCateg).subscribe(data => {

      data.data.forEach((elem, index) => {
        this.breadcrumbs[index+1] = {
          link: "/products" + "/" + elem.id,
          title: elem.name,

        };
      })
    })
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
    // this.get();
    this.onFilterChanged(this.allCategory)
  }

  // public changeMaterialCategory(event, cardNumber?: number) {
  //   console.log(event);
  //   console.log(cardNumber);
  //   this.product.sortBy(event.value, cardNumber).subscribe((res) => {
  //     this.product.products.data.products = res.data.products;
  //   });
  // }
  public onFilterChanged(filters: IFilters): void {

    if(filters.categories.length == 0){
      this.allCategory = filters;
      this.allCategory.categories[0] = this.currentCategory;
    } else {
      this.allCategory = filters;
    }
    this.allCategory.sortPrice = this.curencyMove;

    this.product.getByFilters(this.allCategory).subscribe((data) => {
      this.product.products = data;
    });
  }

  public onSortingChanged(sorting: string) {
    this.product.currencyMove = sorting;
    this.curencyMove = sorting ;

    if(this.allCategory.categories.length==0){
      const id = +this.route.snapshot.paramMap.get('id');
      this.allCategory.categories[0]=id
    }
    this.allCategory.sortPrice = sorting;
      this.product.getByFilters(this.allCategory, this.selectedCardNumber).subscribe((data) => {
        this.product.products = data;
      });
    console.log(sorting)
    this.selectStatusBy = true;
    this.selectedSorting = sorting;

  }

  public onCardNumberChanged(cardNumber: number) {
    this.product.productCount = cardNumber;
    this.selectStatus = true;
    this.selectedCardNumber = cardNumber;
    // this.product.sortBy(this.selectedSorting, this.selectedCardNumber).subscribe((res) => {
    //   this.product.products = res;
    // });
    this.product.getByFilters(this.allCategory,this.selectedCardNumber).subscribe((data) => {
      this.product.products = data;
    })
  }
}
