import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { DragScrollComponent } from "ngx-drag-scroll";
//import { SliderItemDirective } from './slider-item.directive';
import { DragScrollItemDirective } from 'ngx-drag-scroll';
import {environment} from '../../../../environments/environment';
import {CurrencyService} from '../../currency/currency.service';
import {CartService} from '../../cart/cart.service';
import {AccauntService} from '../../accaunt/accaunt.service';
import {ProductService} from '../product.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],

})
export class ProductSliderComponent implements OnInit, AfterViewInit {
  @Input() products: Array<any> = [];
  @Input() hoststatic = environment.hoststatic;
  @ViewChild('slider', {read: DragScrollComponent}) ds: DragScrollComponent;
  @ViewChild('drag-scroll-item') dragScrollItem: DragScrollItemDirective;

  private slidesIndex = 0;
  Math = Math;
  userId: number;

  constructor(
    public currency: CurrencyService,
    public cart: CartService,
    public accauntService: AccauntService,
    public productService: ProductService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.hasOwnProperty('token')) {
        this.getUserAccauntData();
      }
    }
  }

  public ngAfterViewInit(): void {}


  get currentItem(): ElementRef<HTMLDivElement> {
    return this.dragScrollItem?._elementRef;
  }

  toCart($event: Event, item: any) {
    $event.preventDefault();
    this.cart.openCartView();
    this.cart.addToCart(item);
  }

  isIn24Created(date): boolean {
    const date1 = new Date(date);
    const timeStamp = Math.round(new Date().getTime() / 1000);
    const timeStampYesterday = timeStamp - (24 * 3600);
    const is24 = date1.getTime() >= new Date(timeStampYesterday * 1000).getTime();
    return is24;
  }

  public getUserAccauntData(): void {
    this.accauntService.getUser().subscribe((data) => {


      this.userId = data.data.user.id;
      this.accauntService.current = data.data;
      this.accauntService.onCurrent();
    });
  }

  public addToWishlist(event: Event, product) {
    event.preventDefault();
    this.cart.openFavoriteView();
    this.cart.addToFavourite(product);

    // this.cart.addProductToWishlist({
    //   product_id: product?.description?.product_id,
    //   user_id: this.userId
    // }).subscribe((res) => {

    //   alert(`Product #${res.data.product_id} was added to wishlist!`);
    // })
  }

  // public onClickLeft(): void {
  //   console.log('this.ds.currIndex ================ >>>>>>>>>>>>>>>>>>>>>>>>>>', this.ds.currIndex);

  //   if (this.ds._contentRef.nativeElement.scrollLeft) {
  //     this.ds._contentRef.nativeElement.scrollLeft -= this.currentItem?.nativeElement?.offsetWidth;
  //   }

  //   this.ds.moveLeft();
  // }

  // public onClickRight(): void {
  //   console.log('this.ds.currIndex ================ >>>>>>>>>>>>>>>>>>>>>>>>>>', this.ds.currIndex);

  //   if (this.ds._contentRef &&
  //     this.ds._contentRef.nativeElement &&
  //     this.ds._contentRef.nativeElement.scrollLeft) {
  //     this.ds._contentRef.nativeElement.scrollLeft += this.currentItem?.nativeElement?.offsetWidth;
  //   }

  //   if (this.ds.currIndex < this.products.length - 1) {
  //     this.moveTo(0);
  //   } else {
  //     this.ds.moveRight();
  //   }
  // }

  public moveRight(): void {
    //if (isPlatformBrowser(this.platformId)) {
      if (this.ds.currIndex == this.ds._children.length) {
        this.moveTo(0);
      } else {
        this.ds.moveRight();
      }
    //}
  }

  public moveLeft(): void {
    //if (isPlatformBrowser(this.platformId)) {
      this.ds.moveLeft();
    //}
  }

  public moveTo(index): void {
    //if (isPlatformBrowser(this.platformId)) {
      this.ds.moveTo(index);
    //}
  }
}
