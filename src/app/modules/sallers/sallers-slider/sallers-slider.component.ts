import { Component, OnInit, Input, ViewChild } from "@angular/core";

import { environment } from "src/environments/environment";


@Component({
  selector: "app-sallers-slider",
  templateUrl: "./sallers-slider.component.html",
  styleUrls: ["./sallers-slider.component.scss"],
})
export class SallersSliderComponent implements OnInit {


  @Input() slides: Array<any> = [];
  @Input() auto: boolean = false;
  @Input() timeout: number = 10000;

  // @ViewChild("carusel") public carusel: DragScrollComponent;

  constructor() {
    
  }
  hoststatic = environment.hoststatic;

  ngOnInit(): void {}

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

  moveRight(){}
  moveLeft(){}

}
