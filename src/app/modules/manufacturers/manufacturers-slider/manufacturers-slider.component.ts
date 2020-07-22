import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manufacturers-slider',
  templateUrl: './manufacturers-slider.component.html',
  styleUrls: ['./manufacturers-slider.component.scss']
})
export class ManufacturersSliderComponent implements OnInit {
  @Input() list: Array<any> = [];
  hoststatic = environment.hoststatic;

  constructor() { }

  ngOnInit(): void {
  }
  moveRight(){}
  moveLeft(){}

}
