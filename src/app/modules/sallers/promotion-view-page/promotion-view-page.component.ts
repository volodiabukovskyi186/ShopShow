import { Component, OnInit } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { ActivatedRoute } from '@angular/router';
// import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SallersService } from 'src/app/modules/sallers/sallers.service';
import { environment } from 'src/environments/environment';
import { ProductService } from '../../../modules/product/product.service';

import { IFilters } from '../../filter/filter.component';

@Component({
  selector: "app-promotion-view-page",
  templateUrl: "./promotion-view-page.component.html",
  styleUrls: ["./promotion-view-page.component.scss"],
})
export class PromotionViewPageComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage",
    },
    {
      link: "/promotions",
      title: "Promotions",
    },
  ];
    Math=Math
  allCategory: IFilters = {
    categories: [],
    manufacturers:[],
    minPrice: 0,
    maxPrice:0,
    sortPrice: ''
  };
    cardNumbers = [];
    selectedCardNumber: number=0;
    selectStatus = false;
    selectStatusBy = false;
  constructor(
    private route: ActivatedRoute,
    // private ngxService: NgxUiLoaderService,
    public sallers: SallersService,
    public product: ProductService,
  ) {}

  public id: number;
  public host = environment.hoststatic;

  public ngOnInit(): void {
      if (window.location.href.indexOf('?page') !== -1) {
          window.location.href = window.location.href.slice(0, window.location.href.indexOf('?page'));
      }
    this.route.params.subscribe((data) => {
      this.id = data["id"];
    });
    this.sallers.getBy(this.id).subscribe((res) => {
      this.getByIdHandler(res);
    });
    this.cardNumbers = [3, 6, 9, 12, 15, 17, 20, 100];
  }
  getProducts():void{
      //get product after GET BY==>
      this.sallers.getByFilters(this.allCategory, this.id).subscribe((data) => {
          this.sallers.item.products = data.data.products;
          console.log( 'qweqwe', this.sallers.item)
      });
  }
  getByIdHandler = (data) => {
    this.sallers.item = data?.data;
    this.getProducts();
    this.breadcrumbs.push({
      link: `promotions/${this.id}`,
      title: this.sallers.item.name,
    });
  };

  public onFilterChanged(filters: IFilters): void {


    this.sallers.getByFilters(filters, this.id ).subscribe((data) => {
        this.sallers.item.products = data.data.products;
        this.sallers.promotions.count = data.count;
        console.log('ppppppp+.', this.sallers.item.products)
      // this.product.products.data.products = data.data.products;
      // console.log(this.product.products.data.products);
    });
  }
    public onSortingChanged(sorting: string) {
        this.allCategory.sortPrice = sorting;
        this.sallers.currencyMove = sorting;
        this.selectStatus = true;
        this.sallers.getByFilters(this.allCategory, this.id, this.selectedCardNumber).subscribe((data) => {
            this.sallers.item.products = data.data.products;
        });
    }

    public onCardNumberChanged(cardNumber: number) {
        this.sallers.productCount = cardNumber;
        this.selectStatusBy = true;
        this.selectedCardNumber = cardNumber;
        this.sallers.promotions.take = cardNumber;
        this.sallers.getByFilters(this.allCategory, this.id, this.selectedCardNumber).subscribe((data) => {
            this.sallers.item.products = data.data.products;
        });
    }
    pageChangedHandler(page: number): void {
        this.sallers.page = page;
        this.onFilterChanged(this.allCategory)
    }
}
