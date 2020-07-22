import { Component, OnInit, Input } from '@angular/core';
import { IManufacturerReviews, IReview } from '../review';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  @Input() reviews: IReview[];

  constructor() { }

  ngOnInit(): void {
  }

  active(event: Event) {
    let el: HTMLElement = <HTMLElement>event.target;
    el.classList.add('active')
  }

}
