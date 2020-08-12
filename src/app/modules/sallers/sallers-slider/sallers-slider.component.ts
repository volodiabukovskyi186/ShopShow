import {Component, OnInit, Input, ViewChild, AfterViewInit, OnDestroy} from "@angular/core";
// import { DragScrollComponent } from "ngx-drag-scroll";
import {environment} from "src/environments/environment";
import {DragScrollComponent} from "ngx-drag-scroll";

@Component({
  selector: "app-sallers-slider",
  templateUrl: "./sallers-slider.component.html",
  styleUrls: ["./sallers-slider.component.scss"],
})
export class SallersSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() slides: Array<any> = [];
  @Input() auto: boolean = true;
  @Input() timeout: number = 8000;

  @ViewChild('slider', {read: DragScrollComponent}) ds: DragScrollComponent;

  constructor() {}

  hoststatic = environment.hoststatic;

  ngOnInit(): void {}

  interval: any;

  startAuto() {
    if (this.auto) {
      this.interval = setInterval(() => {
        if (this.ds.currIndex == this.ds._children.length - 1) {
          this.moveTo(0);
        } else {
          this.moveRight();
        }
      }, this.timeout);
    }
    //this.stopAuto();
  }

  ngOnDestroy(): void {
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

    this.stopAuto();
    this.startAuto()
  }

  moveRight() {
    if (this.ds.currIndex == this.ds._children.length - 1) {
      this.moveTo(0);
    } else {
      this.ds.moveRight();
    }

    this.stopAuto();
    this.startAuto()
  }

  moveTo(index) {
    this.ds.moveTo(index);
  }

}
