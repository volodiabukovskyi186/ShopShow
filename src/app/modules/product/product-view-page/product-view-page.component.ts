import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavLink} from 'src/app/modules/ui/rap/nav-item/nav-link';
import {ActivatedRoute, Router} from '@angular/router';
// import { NgxUiLoaderService } from "ngx-ui-loader";
import {ProductService} from 'src/app/modules/product/product.service';
// import { CartService } from "src/app/modules/cart/cart.service";
import {Title, Meta} from '@angular/platform-browser';
import {PaginationPage} from 'src/app/modules/ui/rap/pagination/pagination-page';
import {CartService} from '../../cart/cart.service';
import {CurrencyService} from '../../currency/currency.service';
import {FormGroup, FormControlName, FormControl, Validators} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AccauntService} from '../../accaunt/accaunt.service';

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
    user: any;

    review: FormGroup = new FormGroup({
        author: new FormControl('', [Validators.required]),
        text: new FormControl('', [Validators.required]),
        rating: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
    });
    private destroy$: Subject<void> = new Subject<void>();

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();

    }


    breadcrumbs: Array<NavLink>;

    constructor(
        private route: ActivatedRoute,
        // private ngxService: NgxUiLoaderService,
        public currency: CurrencyService,
        public product: ProductService,
        public cart: CartService,
        private title: Title,
        private meta: Meta,
        private router: Router,
        private accauntService: AccauntService
    ) {
    }

    stars = [
        {
            id: 'star1',
            value: 1,
            src: 'assets/icons/stars-silver.png',
        },
        {
            id: 'star2',
            value: 2,
            src: 'assets/icons/stars-silver.png',
        },
        {
            id: 'star3',
            value: 3,
            src: 'assets/icons/stars-silver.png',
        },
        {
            id: 'star4',
            value: 4,
            src: 'assets/icons/stars-silver.png',
        },
        {
            id: 'star5',
            value: 5,
            src: 'assets/icons/stars-silver.png',
        }
    ];


    getByIdHandler = (data) => {
        this.product.item = data.data;
        //this.updateTitle(this.product.item.description.name + ` | ShowU ` + this.product.item.description.tag);
        this.updateTitle(this.product.item.description.name + ` | ShowU `);
        this.updateDescription(this.product.item.description.meta_discription);
        // link: "manufacturer" + "/" + this.id,

        if (this.product.item?.category?.category?.descriptions.name) {
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
        this.meta.updateTag({name: 'description', content: desc});
    }

    ngOnInit(): void {
        this.getUser();
        this.review
            .get('rating')
            .valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => {
                console.log(value);
                this.stars = this.stars.map(star => {
                    return {
                        ...star,
                        src: star.value <= value ? 'assets/icons/star.svg' : 'assets/icons/stars-silver.png',
                    };
                });
            });
        this.route.params.subscribe((data) => {
            // set lang
            this.breadcrumbs = [
                {
                    link: '/',
                    title: 'Homepage',
                },
            ];

            this.id = data['id'];

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
        this.product.getProdAttr(id).subscribe(this.getProdAttrHandler);
    }

    getProdReview(id) {
        this.product.getProdReview(id).subscribe(this.getProdReviewHandler);
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
        });
        this.attrMapArr = attrArr;
    };

    generateProductViewForm(): void {
        this.productViewForm = new FormGroup({
            color: new FormControl('', []),
            size: new FormControl('', [])
        });

    }

    getProdReviewHandler = data => {
        this.product.reviews = data;

        // this.ngxService.stopAll();
    };

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

    getUser(): void {
        this.accauntService.getUser().pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.user = data;
        });
    }

    addReview() {
        const review = {
            product_id: this.id,
            user_id: this.user.data.user.id,
            status: 2,
            created_at: new Date(),
            updated_at: null,
            ...this.review.value
        };
        console.log(review);
        this.product.postReview(review).pipe(takeUntil(this.destroy$)).subscribe();
        // if ( review.user_id! = '') {
        // }

        // this.myService.create(review).pipe(takeUntil(this.destroy$)).subscribe(resp=>{
        // });
    }
}
