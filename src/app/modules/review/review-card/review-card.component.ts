import { Component, OnInit, Input } from '@angular/core';
import { IManufacturerReviews } from '../review';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit {
  @Input() reviews: IManufacturerReviews; 
  @Input() reviewsList: IManufacturerReviews; 
  @Input() title: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
