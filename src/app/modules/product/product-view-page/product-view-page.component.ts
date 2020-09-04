import {Component, OnDestroy, OnInit} from '@angular/core';
import { NavLink } from 'src/app/modules/ui/rap/nav-item/nav-link';
import { ActivatedRoute, Router } from '@angular/router';
// import { NgxUiLoaderService } from "ngx-ui-loader";
import { ProductService } from 'src/app/modules/product/product.service';
// import { CartService } from "src/app/modules/cart/cart.service";
import { Title, Meta } from '@angular/platform-browser';
import { PaginationPage } from 'src/app/modules/ui/rap/pagination/pagination-page';
import { CartService } from '../../cart/cart.service';
import { CurrencyService } from '../../currency/currency.service';
import {FormGroup, FormControlName, FormControl, Validators} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss'],
})
export class ProductViewPageComponent implements OnInit, OnDestroy {
  id: number = 0;
  attrMapArr;
  attrColor = [];
  attrSize = [];
  productViewForm: FormGroup;
  isAttrColor: boolean = false;
  isAttrSize: boolean = false;

  testGroup: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,100}')]),
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{2,10}')]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+@[a-z]{2,6}.[a-z]{2,4}')]),
      star: new FormControl(5, [Validators.required]),
  });
  private destroy$: Subject<void> = new Subject<void>();
 ngOnDestroy() {
   this.destroy$.next();
   this.destroy$.complete();
 }

  addReview() {
    const review = {
      product_id: this.id,
      user_id: '',
      author: 'User',
      ...this.testGroup.value
    };
console.log('good')
    if( review.user_id! = '') {

        this.product.postReview(review).pipe(takeUntil(this.destroy$)).subscribe();
    }

    // this.myService.create(review).pipe(takeUntil(this.destroy$)).subscribe(resp=>{
    // });
  }

  breadcrumbs: Array<NavLink> 
  constructor(
      private route: ActivatedRoute,
      // private ngxService: NgxUiLoaderService,
      public currency: CurrencyService,
      public product: ProductService,
      public cart: CartService,
      private title: Title,
      private meta: Meta,
      private router: Router
  ) {}

  stars = [
      {
          id: 'star1',
          value: 1,
          src: 'assets/icons/cancel.svg',
      },
      {
          id: 'star2',
          value: 2,
          src: 'assets/icons/cancel.svg',
      },
      {
          id: 'star3',
          value: 3,
          src: 'assets/icons/cancel.svg',
      },
      {
          id: 'star4',
          value: 4,
          src: 'assets/icons/cancel.svg',
      },
      {
          id: 'star5',
          value: 5,
          src: 'assets/icons/cancel.svg',
      }
  ]
  

  getByIdHandler = (data) => {
    this.product.item = data.data;
  //this.updateTitle(this.product.item.description.name + ` | ShowU ` + this.product.item.description.tag);
    this.updateTitle(this.product.item.description.name + ` | ShowU `);
    this.updateDescription(this.product.item.description.meta_discription );
    // link: "manufacturer" + "/" + this.id,
   
    if(this.product.item?.category?.category?.descriptions.name){
      this.breadcrumbs.push({
        link: `/products/${this.product.item?.category?.category_id}`,
        title: this.product.item?.category?.category?.descriptions.name,
      });
    }
   
    this.breadcrumbs.push({
      link: `/products/view/${this.id}`,
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
      this.testGroup
          .get('star')
          .valueChanges
          .pipe(takeUntil(this.destroy$))
          .subscribe(value => {
          console.log(value);
          this.stars = this.stars.map(star => {
              return {
                  ...star,
                  src: star.value <= value ? 'assets/icons/star.svg' : 'assets/icons/cancel.svg',
              };
          });
      });
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
    this.generateProductViewForm();
  }

  getProdAttr(id) {
    this.product.getProdAttr(id).subscribe(this.getProdAttrHandler)
  }
  getProdReview(id) {
    this.product.getProdReview(id).subscribe(this.getProdReviewHandler)
  }

  getProdAttrHandler = data => {

    this.product.attributes = data.data;

    const attrMap = {};
    data.data.attrybutes.forEach(element => {
      if (!attrMap[element.attribyte.description.name]) {
        attrMap[element.attribyte.description.name] = [];
      }
      attrMap[element.attribyte.description.name].push(element);
    });

    const attrArr = Object.keys(attrMap);
    const attrArrValues = Object.values(attrMap);

    attrArrValues.forEach((attr) => {
      if (attr[0].attribyte_id === 1) {
        this.isAttrColor = true;
        this.attrColor.push(attr[0]);
        this.productViewForm.get('color').setValue(attr[0].text);
      }

      if (attr[0].attribyte_id === 5) {
        this.isAttrSize = true;
        this.attrSize.push(attr[0]);
        this.productViewForm.get('size').setValue(attr[0].text);
      }
    })
    this.attrMapArr = attrArr;
  }

  generateProductViewForm(): void {
    this.productViewForm = new FormGroup({
      color: new FormControl('', []),
      size: new FormControl('', [])
    });
    console.log(this.productViewForm.value);
  }

  getProdReviewHandler = data => {
    this.product.reviews = data;
    console.log(this.product.reviews);
    // this.ngxService.stopAll();
  }

  count: number = 1;

  add(item: any) {
    this.cart.isCartView = true;
    this.cart.addToCart(item, this.count);
  }
  Math = Math;

  pageChangedHandler(page: number): void {
    this.product.page = page;
    this.getProdReview(this.id);
  }
}
