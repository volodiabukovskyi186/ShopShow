import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IReview } from '../review';
// import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-rewiew-block',
  templateUrl: './rewiew-block.component.html',
  styleUrls: ['./rewiew-block.component.scss']
})
export class RewiewBlockComponent implements OnInit {
  @Input() reviews: IReview[];
  @Input() auto: boolean = false;
  @Input() timeout: number = 10000;

  // @ViewChild("carusel") public carusel: DragScrollComponent;

  constructor() { }
  ngOnInit(): void {
   
  }
  moveLeft(){}
  moveRight(){}


  interval: any;

  startAuto() {
    // if (this.auto)
    //   this.interval = setInterval(() => {
    //     if (this.carusel.currIndex == this.carusel._children.length - 1) {
    //       this.carusel.moveTo(0);
    //     } else {
    //       this.carusel.moveRight();
    //     }
    //   }, this.timeout);
  }

  stopAuto() {
    clearInterval(this.interval);
  }

  ngAfterViewInit() {
    this.startAuto();
  }
}
