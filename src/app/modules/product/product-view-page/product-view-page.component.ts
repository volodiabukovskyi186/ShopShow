import { Component, OnInit } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { ActivatedRoute } from "@angular/router";
// import { NgxUiLoaderService } from "ngx-ui-loader";
import { ProductService } from "src/app/modules/product/product.service";
// import { CartService } from "src/app/modules/cart/cart.service";
import { Title, Meta } from "@angular/platform-browser";
import { PaginationPage } from 'src/app/modules/ui/rap/pagination/pagination-page';
import { CartService } from '../../cart/cart.service';
import { CurrencyService } from '../../currency/currency.service';

@Component({
  selector: "app-product-view-page",
  templateUrl: "./product-view-page.component.html",
  styleUrls: ["./product-view-page.component.scss"],
})
export class ProductViewPageComponent implements OnInit, PaginationPage {
  id: number = 0;

  breadcrumbs: Array<NavLink> 
  constructor(
    private route: ActivatedRoute,
    // private ngxService: NgxUiLoaderService,
    public currency: CurrencyService,
    public product: ProductService,
    public cart: CartService,
    private title: Title,
    private meta: Meta
  ) {}
  

  getByIdHandler = (data) => {
    this.product.item = data.data;

    this.updateTitle(this.product.item.description.name + ` | ShowU ` + this.product.item.description.tag);
    this.updateDescription(this.product.item.description.meta_discription );
    // link: "manufacturer" + "/" + this.id,
   
    if(this.product.item?.category?.category?.descriptions.name){
      this.breadcrumbs.push({
        link: `products/${this.product.item?.category?.category_id}`,
        title: this.product.item?.category?.category?.descriptions.name,
      });
    }
   
    this.breadcrumbs.push({
      link: `product/${this.id}`,
      title: this.product.item?.description.name,
    });
  };

  updateTitle(title: string) {
    this.title.setTitle(title);
  }
  updateDescription(desc: string) {
    this.meta.updateTag({ name: "description", content: desc });
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      // set lang
      this.breadcrumbs = [
        {
          link: "/",
          title: "Homepage",
        },
      ];

      this.id = data["id"];

      this.product.getProductBy(this.id).subscribe(this.getByIdHandler);
      this.getProdAttr(this.id);
      this.getProdReview(this.id);
      this.product.getPopular().subscribe((data) => {
        this.product.popular = data.data.products;
        // this.ngxService.stopAll();
      });

    });
  }

  getProdAttr(id) {
    this.product.getProdAttr(id).subscribe(this.getProdAttrHandler)
  }
  getProdReview(id) {
    this.product.getProdReview(id).subscribe(this.getProdReviewHandler)
  }

  getProdAttrHandler = data => {
    this.product.attributes = data.data;
    // this.ngxService.stopAll();
  }

  getProdReviewHandler = data => {
    this.product.reviews = data;
    // this.ngxService.stopAll();
  }

  count: number = 1;

  add(item: any) {
    this.cart.isCartView = true;
    this.cart.addToCart(item, this.count);
  }
  Math = Math;
  pageToHandler(page: number): void {
    this.product.reviewPage = page;
  }
  pagePrevHandler(): void {
    this.product.reviewPage--;
  }
  pageNextHandler(): void {
    this.product.reviewPage++;
  }
  pageChangedHandler(): void {
    this.getProdReview(this.id);
  }
}
