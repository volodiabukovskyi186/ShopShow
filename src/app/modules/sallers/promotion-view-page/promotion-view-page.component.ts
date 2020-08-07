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

  constructor(
    private route: ActivatedRoute,
    // private ngxService: NgxUiLoaderService,
    public sallers: SallersService,
    public product: ProductService,
  ) {}

  id: number = 0;

  

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.id = data["id"];
      console.log("PromotionViewPageComponent: ", this.id);
      
      this.sallers.getBy(this.id).subscribe(this.getByIdHandler);
    });
  }

  host = environment.hoststatic;

  getByIdHandler = (data) => {
    // this.ngxService.stop();
    this.sallers.item = data.data;

    this.breadcrumbs.push({
      link: `promotions/${this.id}`,
      title: this.sallers.item.name,
    });
  };

  public onFilterChanged(filters: IFilters): void {
    this.product.getByFilters(filters).subscribe((data) => {
      this.product.products.data.products = data.data.products;
      console.log(this.product.products.data.products);
    });
  }
}
