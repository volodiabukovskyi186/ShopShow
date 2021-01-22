import { Component, OnInit } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
// import { NgxUiLoaderService } from "ngx-ui-loader";
import { SallersService } from "src/app/modules/sallers/sallers.service";
import { environment } from "src/environments/environment";
import { PaginationPage } from "src/app/modules/ui/rap/pagination/pagination-page";
// import { IResponse } from "src/app/core/response";
import { IPromotion } from "src/app/modules/sallers/promotion";
import { ProductService } from '../../../modules/product/product.service';

import { IFilters } from '../../filter/filter.component';

@Component({
  selector: "app-promotion-page",
  templateUrl: "./promotion-page.component.html",
  styleUrls: ["./promotion-page.component.scss"],
})
export class PromotionPageComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [];
  hoststatic = environment.hoststatic;
  Math = Math;

  constructor(
    // private ngxService: NgxUiLoaderService,
    public prom: SallersService,
    public product: ProductService,
    public sallers: SallersService
  ) {}

  getHandler = (data: any) => {
    this.prom.promotions = data;
  };


  ngOnInit(): void {
    this.breadcrumbs = [
      {
        link: "/",
        title: "Homepage",
      },
      {
        link: "/promotions",
        title: "Promotions",
      },
    ];

    this.get();
  }

  get() {
    // this.ngxService.start();
    this.prom.getProm().subscribe(this.getHandler);
    //this.filterEmptyPromotions();
  }

  // filterEmptyPromotions() {
  //   this.prom.promotions?.data?.forEach((response, index) => {
  //     this.sallers.getBy(response.id).subscribe((dataRes) => {
  //       console.log(dataRes);

  //       if (dataRes?.data?.products?.length === 0) {
  //         this.prom.promotions?.data.splice(index, 1);
  //         console.log('dataRes?.data?.products ===== >>>>', dataRes?.data?.products);
  //       }
  //     });
  //   })
  //   console.log( "promotion",this.prom.promotions);

  //   return this.prom.promotions;
  // }

  // pagination

  pageChangedHandler(page: number): void {
    this.product.page = page;
    this.get();
  }

  countDays(dateEnd: string) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(Date.now());
    const secondDate = new Date(dateEnd);

    // var diff = Math.abs(firstDate.getTime() - secondDate.getTime());
    // var diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    const diffDays = Math.round(
      (secondDate.getTime() - firstDate.getTime()) / oneDay
    );
    return diffDays > 0 ? diffDays : 0;
  }

  public onFilterChanged(filters: IFilters): void {
    this.product.getByFilters(filters).subscribe((data) => {
      this.product.products.data.products = data.data.products;
      console.log(this.product.products.data.products);
    });
  }
  
}
