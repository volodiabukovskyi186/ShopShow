import {Component, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {NavLink} from 'src/app/modules/ui/rap/nav-item/nav-link';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from 'src/app/modules/product/product.service';
import {Title, Meta} from '@angular/platform-browser';
import {CartService} from '../../cart/cart.service';
import {CurrencyService} from '../../currency/currency.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AccauntService} from '../../accaunt/accaunt.service';
import {MatDialog} from '@angular/material/dialog';
import {AddReviewDialogComponent} from '../../dialogs/add-review-dialog/add-review-dialog.component';
import {cardItem} from '../../cart/classes/basket-item.model';

@Component({
    selector: 'app-product-view-page',
    templateUrl: './product-view-page.component.html',
    styleUrls: ['./product-view-page.component.scss'],
})
export class ProductViewPageComponent implements OnInit, OnDestroy {

    constructor(
        private route: ActivatedRoute,
        public currency: CurrencyService,
        public product: ProductService,
        public cart: CartService,
        private title: Title,
        private meta: Meta,
        private router: Router,
        private accauntService: AccauntService,
        public dialog: MatDialog,
    ) {}

    id = 0;
    user: any;
    count = 1;
    Math = Math;
    arrOptionsCheck = [];
    arrOptionsSelect = [];
    allOptions;
    basicPrice: number;
    sizesModal:boolean = false;
    breadcrumbs: Array<NavLink>;
    private destroy$: Subject<void> = new Subject<void>();

    review: FormGroup = new FormGroup({
        author: new FormControl('', [Validators.required]),
        text: new FormControl('', [Validators.required]),
        rating: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
    });



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
        console.log('produ888==>', this.product.item);
        this.basicPrice = this.product.item.price;
        this.arrOptionsSelect = [];
        this.arrOptionsCheck = [];
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

        this.checkSelectedOption();
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
    checkOptionValues(options): void {
        this.checkSelectedOption();
    }
    optionPrice(): void {
        let totalPrice = 0;
        this.product.item.price = this.basicPrice;

        this.allOptions.forEach(elem => {
            elem.price =  elem.price * 1;
            totalPrice = totalPrice + Number(elem.price);
        });
        this.product.item.price = Number(this.product.item.price);
        this.product.item.price = this.product.item.price + totalPrice;
    }

    onSelectOptionChange(optionVal, option): void {
        option.current_item = optionVal.id;
        this.checkSelectedOption();
    }
    closeSize(value): void {
        this.sizesModal = value;
    }
    checkSelectedOption(): void {
        const selectedOptionsCheck = [];
        const selectedOptionsSelect = [];
        this.allOptions = [];
        this.arrOptionsCheck.forEach(elem => {
            elem.values.forEach(res => {
                if (elem.current_item == res.id) {
                    selectedOptionsCheck.push(res);
                }
                if(!res.option_group) {
                    res.option_group = elem.option.description.name;
                }
            });
        });

        this.arrOptionsSelect.forEach(elem => {
            elem.values.forEach(res => {
                if (elem.current_item == res.id) {
                    selectedOptionsSelect.push(res);
                }
                if(!res.option_group) {
                    res.option_group = elem.option.description.name;
                }
            });
        });
        this.allOptions.push(...selectedOptionsSelect, ...selectedOptionsCheck);
        this.optionPrice();
    }

    add(item: any) {
        this.checkSelectedOption();
        console.log(item);
        item.selected_options = this.allOptions;
        this.cart.isCartView = true;
        const newProd = Object.assign({}, item);
        this.cart.addToCart(newProd, this.count);
    }

    updateTitle(title: string) {
        this.title.setTitle(title);
    }

    updateDescription(desc: string) {
        this.meta.updateTag({name: 'description', content: desc});
    }

    public ngOnInit(): void {
        if (localStorage.hasOwnProperty('token')) {
            this.getUser();
        }
        //this.getClientWishlistById();
        
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
            console.log('data ===== >>>>>', data);

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

            alert(`Product #${res.data.product_id} was added to wishlist!`);
        });
    }
}
