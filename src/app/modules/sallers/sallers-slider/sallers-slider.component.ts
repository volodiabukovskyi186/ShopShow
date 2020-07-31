import {Component, OnInit, Input, ViewChild, AfterViewInit} from "@angular/core";
// import { DragScrollComponent } from "ngx-drag-scroll";
import {environment} from "src/environments/environment";
import {DragScrollComponent} from "ngx-drag-scroll";

@Component({
  selector: "app-sallers-slider",
  templateUrl: "./sallers-slider.component.html",
  styleUrls: ["./sallers-slider.component.scss"],
})
export class SallersSliderComponent implements OnInit, AfterViewInit {
  @Input() slides: Array<any> = [];
  @Input() auto: boolean = true;
  @Input() timeout: number = 10000;

  @ViewChild('slider', {read: DragScrollComponent}) ds: DragScrollComponent;

  constructor() {}

  hoststatic = environment.hoststatic;

  ngOnInit(): void {}

  interval: any;

  startAuto() {
    if (this.auto)
      this.interval = setInterval(() => {
        if (this.ds.currIndex == this.ds._children.length - 1) {
          this.moveTo(0);
        } else {
          this.moveRight();
        }
      }, this.timeout);
    this.stopAuto();
  }

  stopAuto() {
    clearInterval(this.interval);
  }

  ngAfterViewInit() {
    this.startAuto();
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    if (this.ds.currIndex == this.ds._children.length - 1) {
      this.moveTo(0);
    } else {
      this.ds.moveRight();
    }
  }

  moveTo(index) {
    this.ds.moveTo(index);
  }

}
