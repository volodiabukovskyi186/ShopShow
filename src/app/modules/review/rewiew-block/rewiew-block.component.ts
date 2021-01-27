import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IReview } from '../review';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-rewiew-block',
  templateUrl: './rewiew-block.component.html',
  styleUrls: ['./rewiew-block.component.scss']
})
export class RewiewBlockComponent implements OnInit {
  @Input() reviews: IReview[];
  @Input() auto: boolean = false;
  @Input() timeout: number = 10000;

  @ViewChild('slider', {read: DragScrollComponent}) ds: DragScrollComponent;
  interval: any;

  constructor() { }
  ngOnInit(): void {
   
  }
  moveLeft(){
    console.log(this.reviews)
    this.ds.moveLeft();
  }

  moveRight(){
    if (this.ds.currIndex == this.ds._children.length - 1) {
      this.moveTo(0);
    } else {
      this.ds.moveRight();
    }
  }
  moveTo(index) {
    this.ds.moveTo(index);
  }


 
  startAuto() {
    if (this.auto)
      this.interval = setInterval(() => {
        if (this.ds.currIndex == this.ds._children.length - 1) {
          this.ds.moveTo(0);
        } else {
          this.ds.moveRight();
        }
      }, this.timeout);
  }

  stopAuto() {
    clearInterval(this.interval);
  }

  ngAfterViewInit() {
    this.startAuto();
  }
}
