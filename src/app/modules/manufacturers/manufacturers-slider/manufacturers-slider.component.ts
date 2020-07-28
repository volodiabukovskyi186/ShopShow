import { Component, OnInit, Input ,ViewChild} from '@angular/core';
import { environment } from 'src/environments/environment';
import {DragScrollComponent} from "ngx-drag-scroll";
@Component({
  selector: 'app-manufacturers-slider',
  templateUrl: './manufacturers-slider.component.html',
  styleUrls: ['./manufacturers-slider.component.scss']
})
export class ManufacturersSliderComponent implements OnInit {
  @Input() list: Array<any> = [];
  hoststatic = environment.hoststatic;
  @ViewChild('slider', {read: DragScrollComponent}) ds: DragScrollComponent;

  constructor() { }

  ngOnInit(): void {
  }
  moveRight(){
   
    if (this.ds.currIndex == this.ds._children.length-1 ) {
      this.moveTo(0);
    } else {
      this.ds.moveRight();
    }
  }
  moveLeft(){
    this.ds.moveLeft();
  }
  moveTo(index) {
    this.ds.moveTo(index);
  }

}
