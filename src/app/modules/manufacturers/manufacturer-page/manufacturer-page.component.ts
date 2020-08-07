import { Component, OnInit } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { ActivatedRoute } from "@angular/router";
// import { NgxUiLoaderService } from "ngx-ui-loader";
import { ManufacturersService } from "src/app/modules/manufacturers/manufacturers.service";
import { ProductService } from '../../product/product.service';
import { environment } from 'src/environments/environment';
// import { IManufacturerReviews } from 'src/app/modules/review/review';
// import { ProductService } from 'src/app/modules/product/product.service';

import { IFilters } from '../../filter/filter.component';

@Component({
  selector: "app-manufacturer-page",
  templateUrl: "./manufacturer-page.component.html",
  styleUrls: ["./manufacturer-page.component.scss"],
})
export class ManufacturerPageComponent implements OnInit {
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

  host = environment.hoststatic;

  constructor(
    private route: ActivatedRoute,
    // private ngxService: NgxUiLoaderService,
    public manufacturer: ManufacturersService,
    public product: ProductService
  ) {}

  id: number = 0;

  getByIdHandler = (data) => {
    // this.ngxService.stopAll();
    this.manufacturer.item = data.data;
    // link: "manufacturer" + "/" + this.id,

    this.breadcrumbs.push({
      link: `/manufacturers/${this.id}`,
      title: this.manufacturer.item.name,
    });
  };

  ngOnInit(): void {
    // this.ngxService.start();
    this.route.params.subscribe((data) => {
      // set lang
      this.id = data["id"];

      this.manufacturer.getBy(this.id).subscribe(this.getByIdHandler);
      this.product.getByManufacturer(this.id).subscribe(this.getByManufacturerHandler);
    });
  }

  getByManufacturerHandler = data => {
    // this.ngxService.stopAll();
    this.product.products = data;

    // this.product.products.data.products.forEach(item=> {
    //   let src:any = JSON.parse(item.image.src);
    //   console.log(src);
      
    //   item.image.src_mini = src.src_mini;
    //   item.image.src = src.src;
    // })
  }

  public onFilterChanged(filters: IFilters): void {
    this.product.getByFilters(filters).subscribe((data) => {
      this.product.products.data.products = data.data.products;
      console.log(this.product.products.data.products);
    });
  }
}
