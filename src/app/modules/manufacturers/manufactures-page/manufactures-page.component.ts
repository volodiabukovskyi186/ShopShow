import { Component, OnInit } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { ManufacturersService } from "src/app/modules/manufacturers/manufacturers.service";
// import { NgxUiLoaderService } from "ngx-ui-loader";
import { environment } from "src/environments/environment";
import { PaginationPage } from 'src/app/modules/ui/rap/pagination/pagination-page';
import { ProductService } from '../../../modules/product/product.service'

@Component({
  selector: "app-manufactures-page",
  templateUrl: "./manufactures-page.component.html",
  styleUrls: ["./manufactures-page.component.scss"]
})
export class ManufacturesPageComponent implements OnInit {
  hoststatic = environment.hoststatic;
  Math = Math;
  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage"
    },
    {
      link: "/manufacturers",
      title: "Manufacturers"
    }
  ];

  constructor(
    // private ngxService: NgxUiLoaderService,
    public product: ProductService,
    public manufacturer: ManufacturersService
  ) {}

  pageChangedHandler(page: number): void {
    this.product.page = page;
    this.get();

  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.manufacturer.get().subscribe(this.getHandler);
    // this.ngxService.start();
  }

  getHandler = data => {
    this.manufacturer.list =  data.data ? data.data : data;
    this.manufacturer.count =  data.count ? data.count :  data.length;
    // this.ngxService.stopAll();
  };
}
