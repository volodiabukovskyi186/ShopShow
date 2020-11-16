import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DragScrollComponent } from "ngx-drag-scroll";
//import { SliderItemDirective } from './slider-item.directive';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],

})
export class ProductSliderComponent implements OnInit, AfterViewInit {
  @Input() products: Array<any> = [];

  // @ContentChildren(SliderItemDirective, { read: ElementRef }) items
  //   : QueryList<ElementRef<HTMLDivElement>>;

  @ViewChild('slider', {read: DragScrollComponent}) ds: DragScrollComponent;
  @ViewChild('slider') slidesContainer;
  @ViewChild('drag-scroll-item') dragItem;

  private slidesIndex = 0;

  constructor() { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    console.log('slides', this.slidesContainer._contentRef);
  }

  get currentItem(): ElementRef<HTMLDivElement> {
    return this.products.find((item, index) => index === this.slidesIndex);
  }

  // public onClickLeft(): void {
  //   if (this.slidesContainer._contentRef.nativeElement.scrollLeft) {
  //     this.slidesContainer._contentRef.nativeElement.scrollLeft -= this.dragItem?.nativeElement?.offsetWidth;

  //     console.log('this.dragItem ======>>>', this.dragItem);
  //   }

  //   console.log('this.dragItem======>>>', this.dragItem);

  //   this.ds.moveLeft();
  // }

  // public onClickRight(): void {
  //   if (this.slidesContainer._contentRef &&
  //     this.slidesContainer._contentRef.nativeElement &&
  //     this.slidesContainer._contentRef.nativeElement.scrollLeft) {
  //     this.slidesContainer._contentRef.nativeElement.scrollLeft += this.dragItem?.nativeElement?.offsetWidth;
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

    console.log(this.ds);
  }

  public moveTo(index): void {
    this.ds.moveTo(index);
  }
}
