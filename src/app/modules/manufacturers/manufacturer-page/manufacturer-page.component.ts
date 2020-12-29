import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import {ActivatedRoute, Event, NavigationEnd, NavigationStart, Router} from '@angular/router';
// import { NgxUiLoaderService } from "ngx-ui-loader";
import { ManufacturersService } from "src/app/modules/manufacturers/manufacturers.service";
import { ProductService } from '../../product/product.service';
import { environment } from 'src/environments/environment';
import { IFilters } from '../../filter/filter.component';
import {FilterService} from '../../filter/filter.service';


@Component({
  selector: "app-manufacturer-page",
  templateUrl: "./manufacturer-page.component.html",
  styleUrls: ["./manufacturer-page.component.scss"],
})
export class ManufacturerPageComponent implements OnInit, OnChanges {
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
    manufacturers: [],
    minPrice: 0,
    maxPrice: 0,
    sortPrice: ''
  };
  cardNumbers = [];
  selectedCardNumber: number = 0;
  selectStatus = false;
  selectStatusBy = false;
  url;
  host = environment.hoststatic;
  constructor(
    private route: ActivatedRoute,
    public manufacturer: ManufacturersService,
    public product: ProductService,
    private router: Router,
    private filterService: FilterService,
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
  getMinMaxPrice():void{
    this.filterService.getMinMaxPrice().subscribe((res) => {
      this.allCategory.maxPrice = res.data.max;
      this.allCategory.minPrice = res.data.min;

    });
  }

  ngOnInit(): void {
    // this.ngxService.start();
    this.getMinMaxPrice();
    if(window.location.href.indexOf('?page') !== -1) {
    window.location.href = window.location.href.slice(0, window.location.href.indexOf('?page'));
    }


    this.route.params.subscribe((data) => {
      this.id = data["id"];
      this.manufacturer.getBy(this.id).subscribe(this.getByIdHandler);
      this.product.getByManufacturer(this.id).subscribe(this.getByManufacturerHandler);
    });
    this.cardNumbers = [3, 6, 9, 12, 15, 17, 20, 100];

  }
  ngOnChanges(changes: SimpleChanges) {

  }


  getByManufacturerHandler = data => {
    // this.ngxService.stopAll();
    this.manufacturer.products = data;
    this.onFilterChanged(this.allCategory);
  }

  public onFilterChanged(filters: IFilters): void {
    this.allCategory = filters;
    this.manufacturer.getByFilters(this.allCategory, this.id ).subscribe((data) => {
      this.manufacturer.products.data.products = data.data.products;
      this.manufacturer.products.count = data.count;
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

    this.manufacturer.getByFilters(this.allCategory, this.id, this.selectedCardNumber).subscribe((data) => {
      this.manufacturer.products.data.products = data.data.products;
      this.manufacturer.products.count = data.count;
      this.manufacturer.products = data;
    });
  }
  pageChangedHandler(page: number): void {
    this.manufacturer.page = page;
    this.onFilterChanged(this.allCategory);
  }
}
