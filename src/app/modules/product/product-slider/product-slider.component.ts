import { Component, OnInit, Input,ViewChild } from '@angular/core';
import {DragScrollComponent} from "ngx-drag-scroll";
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],

})
export class ProductSliderComponent implements OnInit {
  @Input() products: Array<any> = [];

  @ViewChild('slider', {read: DragScrollComponent}) ds: DragScrollComponent;

  constructor() { }

  ngOnInit(): void {
  }
  moveRight(){
    if (this.ds.currIndex == this.ds._children.length ) {
      this.moveTo(0);
    } else {
      this.ds.moveRight();

    }
  }
  moveLeft() {
    this.ds.moveLeft();
  }
  moveTo(index) {
    this.ds.moveTo(index);

  }

}
