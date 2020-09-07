import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { SallersService } from "../../sallers/sallers.service";
import { CollectionService } from '../../collection/collection.service';
import { ReviewService } from '../../review/review.service';
import { ManufacturersService } from '../../manufacturers/manufacturers.service';
import { ProductService } from '../../product/product.service';
import { AppLangService } from '../../core/app-lang.service';
import {ClientPageService} from '../../client-page/client-page.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: "app-showu-home-page",
  templateUrl: "./showu-home-page.component.html",
  styleUrls: ["./showu-home-page.component.scss"],
})
export class ShowuHomePageComponent implements OnInit {
  data: string = "2020-07-13";
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    public collection: CollectionService,

    public appLang: AppLangService,
    public slider: SallersService,
    public product: ProductService,
    public manufacturer: ManufacturersService,
    public review: ReviewService,
    public clientPage: ClientPageService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.slider.getProm().subscribe(this.sallerHandler);
    this.collection.getLastThree().subscribe(this.collectionHandler);
    this.review.get().subscribe(this.getLastReviewsHandler);
    this.manufacturer.get().subscribe(this.getHandler);
    this.updateMeta();
    this.product.getPopular().subscribe((data) => {
      this.product.popular = data.data.products;
    });

    this.product.getSallers().subscribe((data) => {
      this.product.sallers = data.data.products;
    });
  }

  getLastReviewsHandler = data => {
    this.review.data = data.data;
  }

  getHandler = (data) => {
    this.manufacturer.list = data.data;
    this.manufacturer.count = data.count;
  };

  sallerHandler = (data: any) => {
    this.slider.promotions = data;
  };

  collectionHandler = (data) => {
    this.collection.list = data.data;
  };

  i = 1;

  onClick() {
    if (isPlatformBrowser(this.platformId)) {
      this.i++;
      localStorage.setItem("showu", "showu" + this.i);
    }
  }

  updateMeta() {
    const title = `Home | ShowU`;
    this.title.setTitle(title);
  }
}
