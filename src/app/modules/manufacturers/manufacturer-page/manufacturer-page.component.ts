import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import {ActivatedRoute, Event, NavigationEnd, NavigationStart, Router} from '@angular/router';
// import { NgxUiLoaderService } from "ngx-ui-loader";
import { ManufacturersService } from "src/app/modules/manufacturers/manufacturers.service";
import { ProductService } from '../../product/product.service';
import { environment } from 'src/environments/environment';

import { IFilters } from '../../filter/filter.component';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: "app-manufacturer-page",
  templateUrl: "./manufacturer-page.component.html",
  styleUrls: ["./manufacturer-page.component.scss"],
})
export class ManufacturerPageComponent implements OnInit,OnChanges {
  Math = Math;
  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage",
    },
    {
      link: "/manufacturers",
      title: "Manufacturers",
    },
  ];
  allCategory: IFilters = {
    categories: [],
    manufacturers:[],
    minPrice: 0,
    maxPrice:0,
    sortPrice: ''
  };
  cardNumbers = [];
  selectedCardNumber: number = 0;
  selectStatus = false;
  selectStatusBy = false;
  url
  host = environment.hoststatic;
  constructor(
    private route: ActivatedRoute,
    // private ngxService: NgxUiLoaderService,
    public manufacturer: ManufacturersService,
    public product: ProductService,
    private router: Router,
  ) {


  }

  id: number = 0;
  isManufacturerPage: boolean = true;

  getByIdHandler = (data) => {
    // this.ngxService.stopAll();
    this.manufacturer.item = data.data;
    this.breadcrumbs.push({
      link: `/manufacturers/${this.id}`,
      title: this.manufacturer.item.name,
    });
  };

  ngOnInit(): void {
    // this.ngxService.start();
    if(window.location.href.indexOf('?page') !== -1){
    window.location.href=window.location.href.slice(0, window.location.href.indexOf('?page'))
    }

    console.log(this.url)

    this.route.params.subscribe((data) => {
      // set lang
      this.id = data["id"];
      this.manufacturer.getBy(this.id).subscribe(this.getByIdHandler);
      this.product.getByManufacturer(this.id).subscribe(this.getByManufacturerHandler);
    });
    this.cardNumbers = [3, 6, 9, 12, 15, 17, 20, 100];

  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes){
      // console.log('eeessssssse=>', this.route.snapshot)

    }
  }


  getByManufacturerHandler = data => {
    // this.ngxService.stopAll();
    this.manufacturer.products = data;
    this.onFilterChanged(this.allCategory);
    console.log('products===>', this.manufacturer.products);

    // this.product.products.data.products.forEach(item=> {
    //   let src:any = JSON.parse(item.image.src);
    //   console.log(src);
      
    //   item.image.src_mini = src.src_mini;
    //   item.image.src = src.src;
    // })
  }

  // public onFilterChanged(filters: IFilters): void {
  //   console.log(filters);
  //   this.product.getByFilters(filters).subscribe((data) => {
  //     this.product.products.data.products = data.data.products;
  //     console.log(this.product.products.data.products);
  //   });
  // }

  public onFilterChanged(filters: IFilters): void {
    this.manufacturer.getByFilters(filters, this.id ).subscribe((data) => {
      this.manufacturer.products.data.products = data.data.products;
      // this.manufacturer.products = data.data.products;
      console.log('wwwwwww', data.data.products,this.manufacturer.products.data.products);
      // this.product.products.data.products = data.data.products;
      // console.log(this.product.products.data.products);
    });
  }
  public onSortingChanged(sorting: string) {
    this.allCategory.sortPrice = sorting;
    this.manufacturer.currencyMove = sorting;

    this.manufacturer.getByFilters(this.allCategory, this.id, this.selectedCardNumber).subscribe((data) => {
      this.manufacturer.products.data.products = data.data.products;
      this.manufacturer.products = data;
    });
  }

  public onCardNumberChanged(cardNumber: number) {
    this.manufacturer.productCount = cardNumber;
    this.selectStatus = true;
    this.selectedCardNumber = cardNumber;
    this.manufacturer.products.count = cardNumber;
    this.manufacturer.getByFilters(this.allCategory, this.id, this.selectedCardNumber).subscribe((data) => {
      this.manufacturer.products.data.products = data.data.products;
      this.manufacturer.products = data;
    });
  }
  pageChangedHandler(page: number): void {
    this.manufacturer.page = page;
    this.onFilterChanged(this.allCategory)
  }
}
