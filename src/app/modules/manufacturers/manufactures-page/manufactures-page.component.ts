import { Component, OnInit } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { ManufacturersService } from "src/app/modules/manufacturers/manufacturers.service";
// import { NgxUiLoaderService } from "ngx-ui-loader";
import { environment } from "src/environments/environment";
import { PaginationPage } from 'src/app/modules/ui/rap/pagination/pagination-page';

@Component({
  selector: "app-manufactures-page",
  templateUrl: "./manufactures-page.component.html",
  styleUrls: ["./manufactures-page.component.scss"]
})
export class ManufacturesPageComponent implements OnInit, PaginationPage {
  hoststatic = environment.hoststatic;
  Math = Math;
  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage"
    },
    {
      link: "manufacturers",
      title: "Manufacturers"
    }
  ];

  constructor(
    // private ngxService: NgxUiLoaderService,
    public manufacturer: ManufacturersService
  ) {}
  pageToHandler(page: number): void {
    this.manufacturer.page = page;
  }
  pagePrevHandler(): void {
    this.manufacturer.page--;
  }
  pageNextHandler(): void {
    this.manufacturer.page++;
  }
  pageChangedHandler(): void {
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
