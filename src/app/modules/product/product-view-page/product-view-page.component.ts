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
import {ViewportScroller} from '@angular/common';
import {WishlistService} from '../../../modules/accaunt/wishlist/services/wishlist.service';
import {FooterSubscribeDialogComponent} from '../../dialogs/footer-subscribe-dialog/footer-subscribe-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {AddReviewDialogComponent} from '../../dialogs/add-review-dialog/add-review-dialog.component';
import {emit} from 'cluster';

@Component({
    selector: 'app-product-view-page',
    templateUrl: './product-view-page.component.html',
    styleUrls: ['./product-view-page.component.scss'],
})
export class ProductViewPageComponent implements OnInit, OnDestroy {

    constructor(
        private route: ActivatedRoute,
        // private ngxService: NgxUiLoaderService,
        public currency: CurrencyService,
        public product: ProductService,
        public cart: CartService,
        public wishlistService: WishlistService,
        private title: Title,
        private meta: Meta,
        private router: Router,
        private accauntService: AccauntService,
        private viewportScroller: ViewportScroller,
        public dialog: MatDialog,
    ) {
    }

    id = 0;
    attrMapArr;
    attrColor = [];
    attrSize = [];
    arrProdStatus = [];
    productViewForm: FormGroup;
    isAttrColor = false;
    isAttrSize = false;
    user: any;
    // fragment: string;
    userId: number;
    count = 1;
    Math = Math;
    wishlistProducts = [];
    arrOptionsCheck = [];
    arrOptionsSelect = [];
    allOptions
    private destroy$: Subject<void> = new Subject<void>();

    review: FormGroup = new FormGroup({
        author: new FormControl('', [Validators.required]),
        text: new FormControl('', [Validators.required]),
        rating: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
    });

    breadcrumbs: Array<NavLink>;

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

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    getByIdHandler = (data) => {
        this.product.item = data?.data;
        this.arrOptionsSelect = [];
        this.arrOptionsCheck = [];
        // this.arrOptionsCheck = data.data.options;
        data.data.options.forEach(elem => {
            if (elem.option.type == 'select') {
                this.arrOptionsSelect.push(elem);
            } else {
                this.arrOptionsCheck.push(elem);
            }
        });
        this.arrOptionsCheck.forEach(elem => {
            elem.values.forEach(item => {
                item.selected = false;
            });
            elem.current_item = elem.values[0].id;
        });
        this.arrOptionsSelect.forEach(elem => {
            elem.values.forEach(item => {
                item.selected = false;
            });
            elem.current_item = elem.values[0].id;
        });
        console.log('product==>', this.arrOptionsCheck, this.arrOptionsSelect);

        this.updateTitle(this.product?.item?.description?.name + ` | ShowU `);
        this.updateDescription(this.product?.item?.description?.meta_discription);


        if (this.product?.item?.category?.category?.descriptions.name) {
            this.breadcrumbs.push({
                link: `/products/${this.product?.item?.category?.category_id}`,
                title: this.product?.item?.category?.category?.descriptions.name,
            });
        }

        this.breadcrumbs.push({
            link: `/products/view/${this.id}`,
            title: this.product?.item?.description.name,
        });
    };

    onSelectOptionChange(optionVal, option): void {
        option.current_item = optionVal.id;
        console.log('option', option);
    }

    add(item: any) {
        const selectedOptionsCheck = [];
        const selectedOptionsSelect = [];
        this.allOptions = [];

        this.arrOptionsCheck.forEach(elem => {
            elem.values.forEach(res => {
                if (elem.current_item == res.id) {
                    selectedOptionsCheck.push(res);
                }
            });
        });

        this.arrOptionsSelect.forEach(elem => {
            elem.values.forEach(res => {
                if (elem.current_item == res.id) {
                    selectedOptionsSelect.push(res);
                }
            });
        });


        // console.log('pppp=>',this.arrOptionsCheck, this.arrOptionsSelect);

        this.allOptions.push(...this.arrOptionsCheck, ...this.arrOptionsSelect);
        // this.allOptions = selectedOptionsCheck.concat(selectedOptionsSelect);
        item.selected_options = this.allOptions;
         // = selectedOptions;
        console.log('999999', this.allOptions);
        // this.cart.isCartView = true;
        // this.cart.addToCart(item, this.count);
    }

    updateTitle(title: string) {
        this.title.setTitle(title);
    }


    updateDescription(desc: string) {
        this.meta.updateTag({name: 'description', content: desc});
    }

    public ngOnInit(): void {
        this.getUser();

        // this.getClientWishlistById();

        this.review
            .get('rating')
            .valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => {
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

            this.id = data.id;

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
        this.product.getProdAttr(id).subscribe(this.getProdAttrHandler);
    }

    getProdReview(id) {
        this.product.getProdReview(id).subscribe(this.getProdReviewHandler);

    }

    getProdAttrHandler = data => {
        this.product.attributes = data?.data;
    };
    getProdReviewHandler = data => {
        this.product.reviews = data;

    };

    pageChangedHandler(page: number): void {
        this.product.page = page;
        this.getProdReview(this.id);
    }

    getUser(): void {
        this.accauntService.getUser().pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.user = data;
            if (this.user) {
                this.review.setValue(
                    {
                        text: '',
                        author: this.user.data.user.first_name,
                        email: this.user.data.user.email,
                        rating: 0
                    }
                );
            }

        });
    }

    public addReview(): void {
        const review = {
            product_id: this.id,
            user_id: this.user?.data?.user.id,
            status: 2,
            created_at: new Date(),
            updated_at: null,
            ...this.review.value
        };

        this.product.postReview(review)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {

                const dialogRef = this.dialog.open(AddReviewDialogComponent, {});

                dialogRef.afterClosed().subscribe(res => {
                    this.router.navigate(['/']);
                });
            });


    }

    // public getClientWishlistById() {
    //     this.wishlistService.getUserWishlistByClientId(this.user?.data?.user.id).subscribe((res) => {
    //         this.wishlistProducts.push(res);
    //     })
    // }

    public addToWishlist(product): void {

        this.product.addProductToWishlist({
            product_id: product?.item?.description?.product_id,
            user_id: this.user?.data?.user.id
        }).subscribe((res) => {
            console.log(res);
            alert(`Product #${res.data.product_id} was added to wishlist!`);
        });
    }
}
