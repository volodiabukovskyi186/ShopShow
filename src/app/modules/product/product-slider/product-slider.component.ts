import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DragScrollComponent } from "ngx-drag-scroll";
//import { SliderItemDirective } from './slider-item.directive';
import { DragScrollItemDirective } from 'ngx-drag-scroll';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],

})
export class ProductSliderComponent implements OnInit, AfterViewInit {
  @Input() products: Array<any> = [];

  @ViewChild('slider', {read: DragScrollComponent}) ds: DragScrollComponent;
  @ViewChild('drag-scroll-item') dragScrollItem: DragScrollItemDirective;

  private slidesIndex = 0;

  constructor() {}

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {}

  get currentItem(): ElementRef<HTMLDivElement> {
    return this.dragScrollItem?._elementRef;
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
    if (this.ds.currIndex == this.ds._children.length) {
      this.moveTo(0);
    } else {
      this.ds.moveRight();
    }
  }

  public moveLeft(): void {
    this.ds.moveLeft();
  }

  public moveTo(index): void {
    this.ds.moveTo(index);
  }
}
